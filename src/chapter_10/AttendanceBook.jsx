import React from "react";

const students = [
    {
        id: 1,
        name: "cdd",
    },
    {   id: 2,
        name: "ion",
    },
    {   id: 3,
        name: "neo vincent"
    },
    {   id: 4,
        name: "yoon"
    },
]

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key = {student.id}>{student.name}</li>
            })}
        </ul>
    )
}

export default AttendanceBook;