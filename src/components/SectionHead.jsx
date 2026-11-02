export default function SectionHead(props) {
  let dark = props.dark;
  return (
    <div className={"mb-10 max-w-2xl " + (props.center ? "mx-auto text-center" : "")}>
      <div className="eyebrow">{props.eyebrow}</div>
      <h2
        className={
          "mt-2 font-display text-3xl font-bold sm:text-4xl " + (dark ? "text-white" : "text-ink-900")
        }
      >
        {props.title}
      </h2>
      {props.text ? (
        <p className={"mt-3 text-base " + (dark ? "text-slate-300" : "text-slate-600")}>{props.text}</p>
      ) : null}
    </div>
  );
}
