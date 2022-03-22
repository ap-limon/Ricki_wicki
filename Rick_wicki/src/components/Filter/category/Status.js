import FilterBTN from '../FilterBTN';

const Status = ({ updateStatus, updatePagenumber }) => {
    let status = ["Alive", "Dead", "Unknown"];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsOne"
                >
                    Status
                </button>
            </h2>
            <div
                id="collapsOne"
                className="accordion-collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
            >
                <div
                    className="accordion-body d-flex flex-wrap gap-3"
                >
                    {
                        status.map((item, index) =>
                        (<FilterBTN
                            key={index}
                            index={index}
                            name="status"
                            task={updateStatus}
                            updatePageNumber={updatePagenumber}
                            input={item}
                        />)
                        )
                    }
                </div>
            </div>
        </div>
    )
};

export default Status;