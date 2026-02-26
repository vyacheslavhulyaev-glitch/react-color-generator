import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
    const { hex, weight } = color;
    const saveToClipboard = async() => {
        if (navigator.clipboard) {
            await navigator.clipboard.writeText(`#${hex}`);
            toast.success("Copied to clipboard");
        } else {
            toast.error("Clipboard not supported");
        }
    }
  return (
    <article className={`color ${index > 10 && "color-light"}`} 
        style={{ background: `#${hex}` }}
        onClick={saveToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  )
}
export default SingleColor