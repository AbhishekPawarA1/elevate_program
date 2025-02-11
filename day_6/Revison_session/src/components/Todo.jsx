import { useState } from "react"

export function Todo() {
    let [data, setdata] = useState([])
    let [title, settitle] = useState("")
    let [desc, setdesc] = useState("")
    
    function handletitle(value) {
        settitle(value.target.value)
    }
    function handledesc(value) {
        setdesc(value.target.value)
    }

    function handleadd() {
        let list = {
            id:Math.random * 100,
            title,
            description: desc,
            status:false
        }
        setdata([...data,list])
    }

    return (
        <>
            <input type="text" placeholder="Enter title" value={title} onChange={handletitle} />
            <input type="text" placeholder="Description" value={desc} onChange={handledesc}/>
            <button onClick={handleadd}>Add Task</button>

            <div>
                {
                    data.map((ele) => {
                        return (
                            <div key={ele.id}>
                                <h3>Title:{ele.title}</h3>
                                <h3>Description:{ele.description}</h3>
                                <h3>{ele.status ? "true" : "false"}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}