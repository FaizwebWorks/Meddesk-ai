const Home = () => {
  return (
    <>
      <div className="w-full flex items-center gap-16 justify-center px-10 h-[58vh] mt-4">
        <div>
          <button className="h-44 btn w-44 flex items-center justify-center font-bold text-zinc-900">
            Push button
          </button>
          <h1 className="text-2xl ml-[46px] mt-6 text-black uppercase font-medium">Topic 1</h1>
        </div>
        <div>
          <button className="h-44 btn w-44 flex items-center justify-center font-bold text-zinc-900">
            Push button
          </button>
          <h1 className="text-2xl ml-[46px] mt-6 text-black uppercase font-medium">Topic 2</h1>
        </div>
        <div>
          <button className="h-44 btn w-44 flex items-center justify-center font-bold text-zinc-900">
            Push button
          </button>
          <h1 className="text-2xl ml-[46px] mt-6 text-black uppercase font-medium">Topic 3</h1>
        </div>
        <div>
          <button className="h-44 btn w-44 flex items-center justify-center font-bold text-zinc-900">
            Push button
          </button>
          <h1 className="text-2xl ml-[46px] mt-6 text-black uppercase font-medium">Topic 4</h1>
        </div>
        
      </div>
      {/* <div className="flex items-center w-full justify-center gap-[150px] px-10 text-black">
        <h1 className="text-2xl uppercase font-medium">Topic 1</h1>
        <h1 className="text-2xl uppercase font-medium">Topic 2</h1>
        <h1 className="text-2xl uppercase font-medium">Topic 3</h1>
        <h1 className="text-2xl uppercase font-medium">Topic 4</h1>
      </div> */}
    </>
  );
};

export default Home;
