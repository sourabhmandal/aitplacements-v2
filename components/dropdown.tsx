import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
// <label
// className="block mb-2 text-coolGray-800 font-medium"
// htmlFor=""
// >
// Name
// </label>
// <input
// className=""
// type="text"
// placeholder="Firstname Sirname"
// />

const Dropdown = ({
  buttonname,
  dropdown,
  data,
  setData,
}: IDashboardProps): JSX.Element => {
  const [query, setQuery] = useState("");

  const filteredOpts =
    query === ""
      ? dropdown
      : dropdown.filter((d: IDropdown) =>
          d.key
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <>
      <p className="block mb-2 text-coolGray-800 font-medium">{buttonname}</p>
      <Combobox value={data} onChange={setData}>
        <div className="relative mt-1">
          <Combobox.Input
            className="focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-lg shadow-md w-full border p-3 text-sm leading-5 text-gray-900"
            displayValue={(person: string) => person}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <SelectorIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
          <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredOpts.length === 0 && query !== "" ? (
              <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredOpts.map((d: IDropdown, idx: number) => (
                <Combobox.Option
                  key={idx}
                  className={({ active }) =>
                    `z-30 cursor-default select-none relative p-2 pl-10 m-1 rounded-lg ${
                      active ? "text-white bg-teal-500" : "text-gray-900"
                    }`
                  }
                  value={d.key}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {d.key}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-teal-600"
                          }`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </div>
      </Combobox>
    </>
  );
};

export default Dropdown;
