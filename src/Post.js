export default function Post({title,content, bonus }){
    return(
        <div style={{
            padding:"10px", 
            border:"solid teal 5px", 
            background:"white", borderRadius: "10px",
            boxShadow:"0px 5px 13px rgb(0, 0, 0, 0.4", 
            margin:"25px"
                     }}>

            <h2>{title}</h2>
            <p>{content}</p>
            <hr/>
            <p>{bonus}</p>
        </div>
    )
}