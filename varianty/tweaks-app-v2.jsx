// tweaks-app-v2.jsx — Tweaks island for RARARA ARKESTRA · Постер.
// Applies values to <html> data-attributes.

const RA_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "red",
  "duo": false,
  "density": "roomy",
  "motion": true
}/*EDITMODE-END*/;

function applyTweaks(t){
  const r = document.documentElement;
  r.setAttribute('data-accent', t.accent);
  r.setAttribute('data-duo', t.duo ? 'on' : 'off');
  r.setAttribute('data-density', t.density);
  r.setAttribute('data-motion', t.motion ? 'on' : 'off');
}

function App(){
  const [t, setTweak] = useTweaks(RA_DEFAULTS);
  React.useEffect(()=>{ applyTweaks(t); }, [t]);
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Цвет" />
      <TweakColor label="Акцент" value={t.accent==='red'?'#E0401C':t.accent==='blue'?'#243FB5':t.accent==='green'?'#2F7A4A':'#15110B'}
        options={['#E0401C','#243FB5','#2F7A4A','#15110B']}
        onChange={(hex)=>{
          const map={'#E0401C':'red','#243FB5':'blue','#2F7A4A':'green','#15110B':'black'};
          setTweak('accent', map[hex]||'red');
        }} />
      <TweakToggle label="Дуотон на фото" value={t.duo}
        onChange={(v)=>setTweak('duo', v)} />
      <TweakSection label="Ритм" />
      <TweakRadio label="Плотность" value={t.density}
        options={[{label:'Просторно',value:'roomy'},{label:'Плотно',value:'cozy'}]}
        onChange={(v)=>setTweak('density', v)} />
      <TweakToggle label="Анимация" value={t.motion}
        onChange={(v)=>setTweak('motion', v)} />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<App/>);
