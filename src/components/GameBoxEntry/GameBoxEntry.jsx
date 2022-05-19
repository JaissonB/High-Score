import React from "react";

export default function GameBoxEntry (props) {
    return (
        <tr>
            <th scope="row">{props.id}</th>
            <td>{props.player}</td>
            <td>{props.time}</td>
            <td>{props.score}</td>
        </tr>
    )
}