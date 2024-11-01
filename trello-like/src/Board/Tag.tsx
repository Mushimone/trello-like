
function Tag(props: {tagName: string}) {
    const styles: React.CSSProperties ={
        backgroundColor: "hsl(192, 70%, 62%)",
        padding: "2px",
        borderRadius: "9px",
        fontSize: ".8rem",
        justifyContent: "center",
        textAlign: "center", 
        color: "hsl(0, 0%, 100%)",
        fontFamily: "Arial, sans-serif",
        fontWeight: "bold",

    }
    return (
        <div style={styles}>
            <div>{props.tagName}</div>
        </div>
    );
}

export default Tag;