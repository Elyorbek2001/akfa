export default function Tabs(props) {
  let dark = props.dark;
  let buttons = [];
  for (let i = 0; i < props.items.length; i++) {
    let it = props.items[i];
    let active = props.value === it.id;
    let cls;
    if (dark) {
      cls = active
        ? "border-aqua-400 bg-aqua-400 text-ink-900"
        : "border-white/15 bg-white/5 text-white hover:bg-white/10";
    } else {
      cls = active
        ? "border-aqua-600 bg-aqua-600 text-white shadow-md shadow-aqua-500/30"
        : "border-aqua-100 bg-white text-ink-700 hover:border-aqua-300";
    }
    buttons.push(
      <button
        key={it.id}
        type="button"
        aria-pressed={active}
        onClick={function () {
          props.onChange(it.id);
        }}
        className={"rounded-full border px-4 py-2 text-sm font-semibold transition " + cls}
      >
        {it.label}
      </button>
    );
  }
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label={props.label}>
      {buttons}
    </div>
  );
}
