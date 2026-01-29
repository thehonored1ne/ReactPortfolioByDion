
const EducationTimeline = ({elem, hs, shs, college}) => {

    return (
        <div className="border-2 border-dotted bg-teal-100 p-4 w-full">
            <ul className="timeline timeline-vertical md:timeline-horizontal text-white font-bold text-3xl">

            <li>
                    <div className="timeline-middle">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5 text-red-700"
                        >
                        <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                        />
                        </svg>
                    </div>

                    <div className="timeline-end timeline-box bg-red-700">{college}</div>
                <hr />
            </li>
            
            <li>
                <hr />
                    <div className="timeline-start timeline-box bg-blue-700">{shs}</div>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-blue-700"
                        >
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                            />
                        </svg>
                    </div>
                <hr />
            </li>

            <li>
                <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-green-700"
                        >
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                            />
                        </svg>
                    </div>

                    <div className="timeline-end timeline-box bg-green-700">{hs}</div>
                <hr />
            </li>
            
            <li>
                <hr />
                    <div className="timeline-start timeline-box bg-yellow-700">{elem}</div>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-yellow-700"
                        >
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                            />
                        </svg>
                    </div>
                <hr />
            </li>

            </ul>
        </div>
    )
}

export default EducationTimeline