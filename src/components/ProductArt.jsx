import { createContext, useContext, useId } from "react";

let GlassCtx = createContext("glass");

function Glass(props) {
  let id = useContext(GlassCtx);
  let x = props.x;
  let y = props.y;
  let w = props.w;
  let h = props.h;
  let d =
    "M" + (x + w * 0.12) + " " + (y + h * 0.92) +
    " L" + (x + w * 0.58) + " " + (y + h * 0.08) +
    " L" + (x + w * 0.78) + " " + (y + h * 0.08) +
    " L" + (x + w * 0.32) + " " + (y + h * 0.92) + " Z";
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="1.5" fill={"url(#" + id + ")"} />
      <path d={d} fill="#fff" opacity="0.25" />
    </g>
  );
}

function HingeMark(props) {
  let left = props.hinge === "left";
  let a = left ? props.gx + props.gw - 3 : props.gx + 3;
  let b = left ? props.gx + 3 : props.gx + props.gw - 3;
  let pts =
    a + "," + (props.gy + 3) + " " + b + "," + (props.gy + props.gh / 2) + " " + a + "," + (props.gy + props.gh - 3);
  return (
    <polyline points={pts} fill="none" stroke="#fff" strokeWidth="1.2" strokeDasharray="3 2.5" opacity="0.85" />
  );
}

function Sash(props) {
  let x = props.x;
  let y = props.y;
  let w = props.w;
  let h = props.h;
  let p = 4;
  let gx = x + p;
  let gy = y + p;
  let gw = w - p * 2;
  let gh = h - p * 2;
  let hinge = props.hinge;
  let left = hinge === "left";
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="2" fill={props.frame} stroke="#0f172a" strokeOpacity="0.18" />
      <Glass x={gx} y={gy} w={gw} h={gh} />
      {hinge ? <HingeMark gx={gx} gy={gy} gw={gw} gh={gh} hinge={hinge} /> : null}
      {hinge ? (
        <rect x={left ? x + w - p + 0.3 : x + 0.3} y={y + h / 2 - 8} width={p - 0.6} height="16" rx="1" fill="#475569" />
      ) : null}
    </g>
  );
}

function Opening(props) {
  let x = props.x;
  let y = props.y;
  let w = props.w;
  let h = props.h;
  let b = 6;
  let sashes = props.sashes;
  let sw = (w - b * 2) / sashes.length;
  let items = [];
  for (let i = 0; i < sashes.length; i++) {
    items.push(
      <Sash key={i} x={x + b + i * sw} y={y + b} w={sw} h={h - b * 2} frame={props.frame} hinge={sashes[i]} />
    );
  }
  return (
    <g>
      {props.sill ? <rect x={x - 6} y={y + h} width={w + 12} height="7" rx="2" fill="#cbd5e1" /> : null}
      <rect x={x} y={y} width={w} height={h} rx="5" fill={props.frame} stroke="#0f172a" strokeOpacity="0.2" />
      {items}
    </g>
  );
}

function EntranceDoor(props) {
  let frame = props.frame;
  return (
    <g>
      <rect x="62" y="30" width="116" height="168" rx="5" fill={frame} stroke="#0f172a" strokeOpacity="0.2" />
      <rect x="72" y="40" width="96" height="148" rx="3" fill={frame} stroke="#0f172a" strokeOpacity="0.15" />
      <Glass x={82} y={50} w={76} h={62} />
      <rect x="82" y="122" width="76" height="56" rx="3" fill="none" stroke="#0f172a" strokeOpacity="0.2" />
      <rect x="90" y="130" width="60" height="40" rx="2" fill="#0f172a" opacity="0.05" />
      <rect x="155" y="112" width="5" height="28" rx="2.5" fill="#64748b" />
      <rect x="62" y="56" width="4" height="12" rx="1" fill="#94a3b8" />
      <rect x="62" y="158" width="4" height="12" rx="1" fill="#94a3b8" />
    </g>
  );
}

function BalconyBlock(props) {
  let frame = props.frame;
  return (
    <g>
      <rect x="114" y="120" width="96" height="72" rx="3" fill={frame} stroke="#0f172a" strokeOpacity="0.2" />
      <rect x="122" y="128" width="80" height="56" rx="2" fill="#0f172a" opacity="0.06" />
      <Opening x={30} y={36} w={84} h={156} sashes={["left"]} frame={frame} />
      <Opening x={114} y={36} w={96} h={84} sashes={["right"]} frame={frame} />
    </g>
  );
}

function Slider(props) {
  let frame = props.frame;
  return (
    <g>
      <rect x="26" y="52" width="188" height="140" rx="5" fill={frame} stroke="#0f172a" strokeOpacity="0.2" />
      <Sash x={32} y={58} w={94} h={128} frame={frame} hinge={null} />
      <Sash x={114} y={58} w={94} h={128} frame={frame} hinge={null} />
      <path d="M56 122 H100 M93 115 L100 122 L93 129" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      <path d="M184 122 H140 M147 115 L140 122 L147 129" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
    </g>
  );
}

function IronDoor(props) {
  let art = props.art;
  let color = props.color;
  let handle = { fill: "#e2e8f0", stroke: "#64748b" };

  if (art === "ironStreet") {
    let slats = [];
    for (let i = 1; i < 13; i++) {
      slats.push(
        <line key={i} x1={42 + i * 12} y1="48" x2={42 + i * 12} y2="186" stroke="#fff" strokeOpacity="0.16" strokeWidth="1.5" />
      );
    }
    return (
      <g>
        <rect x="34" y="28" width="172" height="170" rx="4" fill="#0f172a" />
        <rect x="42" y="36" width="156" height="154" rx="2" fill={color} />
        <rect x="120" y="36" width="78" height="154" fill="#000" opacity="0.07" />
        {slats}
        <rect x="42" y="36" width="156" height="12" fill="#000" opacity="0.14" />
        <rect x="119" y="36" width="2" height="154" fill="#000" opacity="0.4" />
        <rect x="108" y="104" width="5" height="36" rx="2.5" fill={handle.fill} stroke={handle.stroke} />
        <rect x="127" y="104" width="5" height="36" rx="2.5" fill={handle.fill} stroke={handle.stroke} />
      </g>
    );
  }

  if (art === "ironPanel") {
    let grooves = [];
    for (let i = 0; i < 3; i++) {
      grooves.push(
        <rect key={i} x={80 + i * 28} y="46" width="18" height="132" rx="3" fill="#000" fillOpacity="0.08" stroke="#fff" strokeOpacity="0.3" />
      );
    }
    return (
      <g>
        <rect x="58" y="26" width="124" height="172" rx="4" fill="#0f172a" />
        <rect x="66" y="34" width="108" height="156" rx="2" fill={color} />
        <rect x="120" y="34" width="54" height="156" fill="#000" opacity="0.07" />
        {grooves}
        <rect x="158" y="86" width="5" height="50" rx="2.5" fill={handle.fill} stroke={handle.stroke} />
        <rect x="152" y="146" width="14" height="22" rx="2" fill="#0f172a" />
        <circle cx="159" cy="153" r="2" fill="#22d3ee" />
        <rect x="156" y="160" width="6" height="4" rx="1" fill="#475569" />
      </g>
    );
  }

  return (
    <g>
      <rect x="58" y="26" width="124" height="172" rx="4" fill="#0f172a" />
      <rect x="66" y="34" width="108" height="156" rx="2" fill={color} />
      <rect x="120" y="34" width="54" height="156" fill="#000" opacity="0.07" />
      <rect x="76" y="44" width="88" height="60" rx="2" fill="#000" fillOpacity="0.06" stroke="#fff" strokeOpacity="0.35" />
      <rect x="76" y="114" width="88" height="66" rx="2" fill="#000" fillOpacity="0.06" stroke="#fff" strokeOpacity="0.35" />
      <circle cx="120" cy="66" r="3.5" fill="#0f172a" stroke="#94a3b8" />
      <circle cx="152" cy="110" r="5" fill={handle.fill} stroke={handle.stroke} />
      <rect x="136" y="107.5" width="22" height="5" rx="2.5" fill={handle.fill} stroke={handle.stroke} />
      <circle cx="152" cy="128" r="2.6" fill="#0f172a" />
      <rect x="58" y="50" width="5" height="14" rx="1" fill="#94a3b8" />
      <rect x="58" y="105" width="5" height="14" rx="1" fill="#94a3b8" />
      <rect x="58" y="160" width="5" height="14" rx="1" fill="#94a3b8" />
    </g>
  );
}

export default function ProductArt(props) {
  let art = props.art;
  let frame = props.tone || "#f8fafc";
  let color = props.color || "#1f2937";
  let dark = props.theme === "dark";
  let raw = useId();
  let uid = raw.replace(/[^a-zA-Z0-9]/g, "");
  let gid = "g" + uid;
  let bid = "b" + uid;
  let body = null;

  if (art === "window1") {
    body = <Opening x={78} y={44} w={84} h={146} sashes={["left"]} frame={frame} sill />;
  } else if (art === "window2") {
    body = <Opening x={36} y={56} w={168} h={134} sashes={["left", "right"]} frame={frame} sill />;
  } else if (art === "window3") {
    body = <Opening x={24} y={62} w={192} h={128} sashes={["left", null, "right"]} frame={frame} sill />;
  } else if (art === "balcony") {
    body = <BalconyBlock frame={frame} />;
  } else if (art === "slider") {
    body = <Slider frame={frame} />;
  } else if (art === "entrance") {
    body = <EntranceDoor frame={frame} />;
  } else {
    body = <IronDoor art={art} color={color} />;
  }

  return (
    <svg viewBox="0 0 240 240" className={props.className || "h-auto w-full"} role="img" aria-label="Mahsulot rasmi">
      <defs>
        <linearGradient id={bid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={dark ? "#12374b" : "#ecfeff"} />
          <stop offset="1" stopColor={dark ? "#071a24" : "#a5f3fc"} />
        </linearGradient>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#cffafe" />
          <stop offset="0.5" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#0e7490" />
        </linearGradient>
      </defs>
      <rect width="240" height="240" rx="26" fill={"url(#" + bid + ")"} />
      <circle cx="200" cy="40" r="46" fill="#fff" opacity={dark ? 0.05 : 0.35} />
      <circle cx="30" cy="214" r="60" fill="#fff" opacity={dark ? 0.04 : 0.25} />
      <ellipse cx="120" cy="208" rx="74" ry="6" fill="#000" opacity="0.14" />
      <GlassCtx.Provider value={gid}>{body}</GlassCtx.Provider>
    </svg>
  );
}
