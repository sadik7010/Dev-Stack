const SideBar = () => {
  return (
    
<div className="flex w-full flex-col rounded-3xl border border-base-200 bg-base-100 p-6 shadow-sm">
  {/* Heading */}
  <h2 className="text-3xl font-bold text-base-content">
    Your Stack
  </h2>

  {/* Subtitle */}
  <p className="mt-2 text-lg text-base-content/50">
    No technologies selected yet.
  </p>

  {/* Empty State */}
  <div className="mt-6 flex min-h-36 w-full items-center justify-center rounded-3xl border-2 border-dashed border-base-300">
    <p className="text-center text-lg text-base-content/50">
      Your stack is empty
    </p>
  </div>

  {/* Remove All Button */}
  <button className="btn btn-outline btn-error mt-6 w-full rounded-2xl text-xl">
    Remove All
  </button>
</div>


  );
};

export default SideBar;
