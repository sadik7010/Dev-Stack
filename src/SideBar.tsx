import type { Dispatch, SetStateAction } from "react";
import type { Itecnologis } from "./types";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

interface SidebarProps {
  selectToStack: Itecnologis[];
  setSelectToStack: Dispatch<SetStateAction<Itecnologis[]>>;
}
const SideBar = ({ selectToStack, setSelectToStack }: SidebarProps) => {
  // single technology remove func
  const handleRemove = (id:string) => {
    const technology = selectToStack.find((tec) => tec.id === id);

    setSelectToStack(
      selectToStack.filter((technology) => technology.id !== id),
    );
    toast.info(`${technology?.name} removed from your stack`);
  };

  // remove all tec
  const handleRemoveAll = () => {
    if (selectToStack.length === 0) {
      toast.warning("Your stack is already empty");
      return;
    }
    setSelectToStack([]);
    toast.success("All technologies removed from your stack!");
  };

  return (
    <div className="w-full  rounded-3xl border border-base-200 bg-base-90 p-6  flex flex-col ">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-base-content">Your Stack</h2>

      {/* Subtitle */}
      {selectToStack.length === 0 ? (
        <p className="mt-2 text-lg text-base-content/50">
          No technologies selected yet.
        </p>
      ) : (
        <p className="mt-2 text-lg text-base-content/50 ">
          {selectToStack.length} Technology Selected
        </p>
      )}

      {/* Empty State */}
      {selectToStack.length === 0 ? (
        <div className="mt-6 flex min-h-36 w-full items-center justify-center rounded-3xl border-2 border-dashed border-base-300">
          <p className="text-center text-lg text-base-content/50">
            Your stack is empty
          </p>
        </div>
      ) : (
        <>
          {/* Selected Technologies */}
          <div className="mt-6 space-y-3">
            {selectToStack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-2xl border border-base-200 p-4"
              >
                {/* Icon */}
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-12 h-12 object-contain"
                />

                {/* Name + Category */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{technology.name}</h3>

                  <p className="text-sm font-medium text-base-content/50">
                    {technology.category}
                  </p>
                </div>

                {/* Cross Button */}
                <button
                  onClick={() => handleRemove(technology.id)}
                  className="text-4xl text-base-content/40 transition cursor-pointer"
                >
                  <RxCross2 />
                </button>
              </div>
            ))}
          </div>

          {/* Remove All Button */}
          <button
            onClick={handleRemoveAll}
            className="btn btn-outline btn-error w-full mt-5 rounded-2xl "
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default SideBar;
