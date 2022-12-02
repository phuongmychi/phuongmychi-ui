import "./Snackbar.scss";

export type SnackbarProps = {
  text: string;
  buttontext: string;
}

const Snackbar: React.FunctionComponent<SnackbarProps> = ({
  text,
  buttontext,
}) => {
  const hanleShow = () => {
    var x = document.getElementById("snackbar") as HTMLElement;
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  };

  return (
    <>
      <button
        style={{
          padding: "8px",
          width: "80px",
        }}
        className="button1"
        onClick={hanleShow}
      >
        {buttontext}
      </button>
      <div id="snackbar">{text}</div>
    </>
  );
};
export default Snackbar;
