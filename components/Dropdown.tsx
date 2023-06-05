import React from "react";

interface DropdownProps {
    title: string;
    options: any[];
    onChangeFunc: Function
}

function Dropdown(props: DropdownProps) {
    const { title, options, onChangeFunc } = props;

    const changeOptionHandler = (option: string) => {
        onChangeFunc(option);
    }

    return (
        <div className="order-2 lg:order-12">
            <div className="dropdown inline-block relative">
                <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="mx-1">{title}</span>
                    <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 w-full">
                    {options?.length &&
                        options.map((option, idx) => (
                            <li key={idx} className="cursor-pointer">
                                <span
                                    onClick={() => changeOptionHandler(option[0])}
                                    className={`rounded-t bg-gray-100 py-2 px-4 block whitespace-no-wrap w-full text-center`}>
                                    {option[1]}
                                </span>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}



export default Dropdown;
