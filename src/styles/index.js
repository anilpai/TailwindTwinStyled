import styled from "styled-components";
import tw from "twin.macro";

const StyledForm = styled.main.attrs({
    className: "h-screen flex flex-col items-center justify-center bg-gray-100"
})`
& {
    section {
        ${tw `text-center`}
        h1 {
            ${tw `font-sans text-6xl font-hairline text-teal-500`}
            transform: scale(1);
            transition: all 0.3s ease-in-out;
        }
        h1:hover {
            transform: scale(1.5);
        }
        p {
            ${tw `text-gray-700 text-lg`}
        }
        h2 {
            ${tw `text-2xl font-hairline mt-5 text-teal-500`}
        }
        ul {
            ${tw `inline-flex`}
        }
        li {
            ${tw `mr-5`}
        }
        a {
            ${tw `text-blue-500 hover:text-gray-500 hover:underline`}
        }
    }
    form {
        ${tw `bg-white text-center rounded py-8 px-5 shadow max-w-xs`}
    }
    input {
        ${tw `border-gray-300 mb-4 w-full border-solid border rounded py-2 px-4`}
    }
    button {
        ${tw `bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
    }
}
`;

export default StyledForm;