import { calcGrowth, calcMargin, cfFilter } from "./miscFuncs";

export function flattenTheObject(obj) {
  const modifiedObject = {};
  const keywordsForMinus = ["cogo", "sgaad", "rade", "ooex", "ex", "ita"];

  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    const newKey = key
      .split("_")
      .map((word, i, arr) => {
        if (i === arr.length - 1) return word.slice(0, 2);
        return word.charAt(0);
      })
      .join("");

    if (typeof value === "object" && value !== null) {
      const flattenedValue = flattenTheObject(value);
      Object.assign(modifiedObject, flattenedValue);
    } else {
      modifiedObject[newKey] = keywordsForMinus.some((kw) => kw === newKey)
        ? -value
        : value;
    }
  });

  return modifiedObject;
}

export function setChangeAndMargin(obj, objPlus, marginKeyword) {
  const modifiedObject = {};

  Object.keys(obj).forEach((key) => {
    const currentValue = obj[key];
    const previousValue = objPlus?.[key] ?? null;

    modifiedObject[`${key}G`] =
      currentValue === previousValue
        ? null
        : calcGrowth(currentValue, previousValue);
    modifiedObject[`${key}M`] = ["eba", "edi"].some((k) => k === key)
      ? null
      : calcMargin(currentValue, obj[marginKeyword]);
  });

  return modifiedObject;
}

export function additionalPropsIS(obj) {
  return {
    ...obj,
    sps: obj.sa / obj.bsou,
    nish: obj.nin + (obj.min ?? 0),
    ttoe: obj.rade + obj.sgaad + obj.ooex,
    fins: obj.in + obj.ex,
    tfin: obj.in + obj.ex + obj.oiex,
    taxR: obj.ita / obj.pin,
  };
}

export function additionalPropsBS(obj) {
  return {
    ...obj,
    wcpT: obj.tcas - obj.tcli,
    cali: obj.tcas - obj.in,
    cash: obj.caceq + obj.rca,
    oca2: obj.pas + obj.has + obj.ocas + obj.ahfsa,
    ppeG: obj.pr + obj.mfeq + obj.laim + obj.le + obj.cipr,
    ppeN: obj.pr + obj.mfeq + obj.laim + obj.le + obj.cipr + obj.ade,
    ltiN: obj.fas + obj.iaad + obj.ipr,
    ocl2: obj.tpa + obj.pe + obj.ocli,
    prvS: obj.pfrach + obj.ltpr,
    otlT: obj.dli + obj.dpli + obj.oncli,
    sheQ: obj.oseq + obj.cst + obj.apica + obj.rea + obj.tst,
    cptE: obj.tseq + obj.tncli,
    dbtT: obj.stde + obj.ltde,
    tngB: obj.tas - obj.ias - obj.go,
    cptT: obj.tseq + obj.tncli - obj.ias - obj.go,
    dbtN: obj.stde + obj.ltde - obj.caceq,
  };
}

export function additionalPropsCF(obj) {
  return {
    ...obj,
    ficfl:
      obj.cdi +
      obj.csis +
      obj.csre +
      obj.ltdis +
      obj.ltdpa +
      obj.ofch +
      obj.stdis,
    tncA: obj.de + obj.sbco + obj.dta + obj.oncit,
    wcmV: obj.are + obj.apa + obj.oali,
    shdT: (obj.csre ?? 0) + (obj.cdi ?? 0),
    cpxR: obj.cex / obj.de,
    ncfl:
      obj.ocfl +
      obj.icfl +
      obj.cdi +
      obj.csis +
      obj.csre +
      obj.ltdis +
      obj.ltdpa +
      obj.ofch +
      obj.stdis,
    bcpo: obj.ecpo - (obj.ocfl + obj.icfl + obj.ficfl),
    tinfl: cfFilter(Object.values(obj), "i"),
    toufl: cfFilter(Object.values(obj), "o"),
  };
}

export function setFinancialRatios(companyObj) {
  const financial_ratios = {};

  companyObj.income_statement.forEach((is, i) => {
    const bs = companyObj.balance_sheet[i];
    const cf = companyObj.cash_flow[i];

    financial_ratios[i] = {
      cr: bs.tcas / bs.tcli,
      qr: (bs.tcas - (bs.in ?? 0)) / bs.tcli,
      caR: bs.caceq / bs.tcli,
      lta: bs.tli / bs.tas,
      dta: bs.dbtT ? bs.dbtT / bs.tas : null,
      dte: bs.dbtT ? bs.dbtT / bs.tseq : null,
      dteb: bs.dbtT ? bs.dbtT / is.eb : null,
      dtwc: bs.dbtT && bs.wcpT > 0 ? bs.dbtT / bs.wcpT : null,
      ic: is.ex && is.eb > 0 ? -is.eb / is.ex : null,
      lev: bs.tas / bs.tseq,
      ast: is.sa / bs.ppeG,
      ppet: is.sa / bs.ppeN,
      rt: is.sa / bs.are,
      invt: bs.in ? -is.cogo / bs.in : null,
      acpt: -is.cogo / bs.apa,
      dso: 360 / (is.sa / bs.are),
      dio: bs.in ? 360 / (is.cogo / bs.in) : null,
      dpo: 360 / (is.cogo / bs.apa),
      ccc:
        360 / (is.sa / bs.are) + bs.in
          ? 360 / (-is.cogo / bs.in)
          : 0 + 360 / (-is.cogo / bs.apa),
      qoiO: cf.ocfl / is.nin,
      qoiF: cf.fcfl / is.nin,
      tdc: cf.ocfl / bs.dbtT,
      stdc: bs.stde ? cf.ocfl / bs.stde : null,
      cpxc: cf.cex ? -cf.ocfl / cf.cex : null,
      drc: cf.ltdpa ? -cf.ocfl / cf.ltdpa : null,
      divc: cf.cdi ? -cf.ocfl / cf.cdi : null,
      csrc: cf.csre ? -cf.ocfl / cf.csre : null,
      tsdc: cf.shdT && cf.shdT < 0 ? -cf.ocfl / cf.shdT : null,
      nisM: is.nishM,
      roe: is.nin / bs.tseq,
    };
  });

  return financial_ratios;
}

export function completed(companyObj) {
  const piotroski_score = {};

  const bsMapped = companyObj.balance_sheet.map((bs, i) => {
    const is = companyObj.income_statement[i];
    return {
      ...bs,
      roa: is.eb / bs.tas,
      roe: is.nish / bs.tseq,
      roce: is.eb / bs.cptE,
      rotce: is.eb / bs.cptT,
      rota: is.eb / bs.tngB,
    };
  });

  const cfMapped = companyObj.cash_flow.map((cf, i) => {
    const is = companyObj.income_statement[i];
    const bs = companyObj.balance_sheet[i];
    return {
      ...cf,
      ocflMg: cf.ocfl / is.sa,
      fcflMg: cf.fcfl / is.sa,
      sa: is.sa,
      dbtT: bs.dbtT,
      ninCF: is.nin,
    };
  });

  companyObj.income_statement.forEach((is, i, arr) => {
    const bs = bsMapped[i];
    const bsPlus = bsMapped[i + 1];
    const cf = cfMapped[i];
    const cfPlus = cfMapped[i + 1];
    const ra = companyObj.financial_ratios[i];
    const raPlus = companyObj.financial_ratios[i + 1];

    piotroski_score[i] = {
      pdl: !raPlus?.lev ? null : ra.lev < raPlus?.lev ? 1 : 0,
      pcr: !raPlus?.cr ? null : ra.cr > raPlus?.cr ? 1 : 0,
      pom: !arr[i + 1]?.oinM ? null : is.oinM > arr[i + 1]?.oinM ? 1 : 0,
      pat: !raPlus?.ast ? null : ra.ast > raPlus?.ast ? 1 : 0,
      psh: !arr[i + 1]?.bsou ? null : is.bsou <= arr[i + 1].bsou ? 1 : 0,
      pni: !arr[i + 1] ? null : is.nin > 0 ? 1 : 0,
      poc: !cfPlus ? null : cf.ocfl > 0 ? 1 : 0,
      pro: !bsPlus ? null : bs.roa > 0 ? 1 : 0,
      pqo: !cfPlus ? null : cf.ocfl > is.nin ? 1 : 0,
    };
  });

  const piotroskiFinal = Object.values(piotroski_score).map((pi, i, arr) => {
    return {
      ...pi,
      ptl: !arr[i + 1] ? null : pi.pdl + pi.psh + pi.pcr,
      pef: !arr[i + 1] ? null : pi.pom + pi.pat,
      ppr: !arr[i + 1] ? null : pi.pni + pi.poc + pi.pro + pi.pqo,
      pts: !arr[i + 1]
        ? null
        : Object.values(pi).reduce((pi, acc) => pi + acc, 0),
    };
  });

  return {
    ...companyObj,
    balance_sheet: bsMapped,
    cash_flow: cfMapped,
    piotroski_score: piotroskiFinal,
  };
}
