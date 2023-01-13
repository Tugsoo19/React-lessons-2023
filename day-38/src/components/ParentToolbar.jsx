export default function ParentToolbar() {
    return (
        <div
            className="Toolbar"
            onClick={() => {
                alert('You clicked on the toolbar!');
            }}
        >
            <button onClick={(e) => {
                e.stopPropagation();   // parentluu damjuuldag click-iig zogsooh
                alert("Playing!")
            }}
            >
                Play Movie
            </button>
            <button onClick={() => alert("Uploading!")}>Upload Image</button>

        </div>
    )
}