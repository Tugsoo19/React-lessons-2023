
export default function FancyButton(props: any) {
    return (
        <div>
            <button className="button">{props.children}</button>
            <style jsx>
                {`
                .button {
                    padding: 2em;
                    border-radius: 2em;
                    border: pink solid 2px;
                    background: purple;
                    font-size: bold;
                    color: white;
                }
                
                `}
            </style>
        </div>

    )
}