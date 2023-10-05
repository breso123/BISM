/* eslint-disable react/prop-types */
import PageNav from "../components/PageNav";
import "../index.css";

function About() {
  return (
    <div className="flex flex-col items-center h-screen">
      <PageNav />
      <div className="h-5/6 w-10/12 flex flex-col items-start gap-10 mt-12">
        <h1 className="text-3xl text-indigo-200 font-semibold">About us</h1>
        <p className="text-lg text-blue-200 text-justify tracking-wider">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          natus, velit maiores nihil repellat sequi voluptatibus praesentium
          fuga ipsa et laborum, eos eaque placeat aliquam impedit quos magni
          quia quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. A
          animi vero commodi temporibus nemo! Delectus quo voluptatibus, nobis
          ipsam accusamus aspernatur. Error sequi vel incidunt, sint labore
          culpa? Esse, aut. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Fuga quis corrupti, possimus quasi debitis optio repellat
          tempora unde magnam laborum cupiditate ullam, explicabo excepturi
          aspernatur, iusto dolor perferendis rerum velit.
        </p>
        <div className="px-14 py-7 border-solid border-4 border-blue-300 h-96 rounded-3xl">
          <h2 className="text-xl text-teal-200 font-semibold mb-10">
            Our Brands
          </h2>
          <div className="grid grid-cols-4 items-center gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="text-lg text-white tracking-wide font-semibold">
                Explorer
              </h3>
              <p className="text-sm text-blue-300 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quasi, adipisci eaque placeat laboriosam officia exercitationem
                voluptas soluta voluptatibus sint laudantium? Est ut maiores
                consectetur totam mollitia, temporibus ea corrupti?
              </p>
              <a
                className="text-xs text-pink-200 ml-4 hover:font-semibold hover:italic"
                href=""
              >
                Explore &rarr;
              </a>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-lg text-white tracking-wide font-semibold">
                Comparator
              </h3>
              <p className="text-sm text-blue-300 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quasi, adipisci eaque placeat laboriosam officia exercitationem
                voluptas soluta voluptatibus sint laudantium? Est ut maiores
                consectetur totam mollitia, temporibus ea corrupti?
              </p>
              <a
                className="text-xs text-pink-200 ml-4 hover:font-semibold hover:italic"
                href=""
              >
                Compare &rarr;
              </a>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-lg text-white tracking-wide font-semibold">
                Screener
              </h3>
              <p className="text-sm text-blue-300 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quasi, adipisci eaque placeat laboriosam officia exercitationem
                voluptas soluta voluptatibus sint laudantium? Est ut maiores
                consectetur totam mollitia, temporibus ea corrupti?
              </p>
              <a
                className="text-xs text-pink-200 ml-4 hover:font-semibold hover:italic"
                href=""
              >
                Screen &rarr;
              </a>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-lg text-white tracking-wide font-semibold">
                Undefined for now
              </h3>
              <p className="text-sm text-blue-300 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quasi, adipisci eaque placeat laboriosam officia exercitationem
                voluptas soluta voluptatibus sint laudantium? Est ut maiores
                consectetur totam mollitia, temporibus ea corrupti?
              </p>
              <a
                className="text-xs text-pink-200 ml-4 hover:font-semibold hover:italic"
                href=""
              >
                Define &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
