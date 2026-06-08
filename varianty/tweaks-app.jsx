// tweaks-app.jsx — Tweaks island for RARARA ARKESTRA.
// Applies values to <html> data-attributes + the --accent CSS var.

const RA_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "accent": "#E86A3A",
  "headline": "serif",
  "density": "roomy",
  "motion": true
}/*EDITMODE-END*/;

function applyTweaks(t){
  const r = document.documentElement;
  r.setAttribute('data-theme', t.theme);
  r.setAttribute('data-headline', t.headline);
  r.setAttribute('data-density', t.density);
  r.setAttribute('data-motion', t.motion ? 'on' : 'off');
  r.style.setProperty('--accent', t.accent);
}

function App(){
  const [t, setTweak] = useTweaks(RA_DEFAULTS);
  React.useEffect(()=>{ applyTweaks(t); }, [t]);
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Тема" />
      <TweakRadio label="Фон" value={t.theme}
        options={[{label:'Тёмная',value:'dark'},{label:'Бумага',value:'paper'}]}
        onChange={(v)=>setTweak('theme', v)} />
      <TweakColor label="Акцент" value={t.accent}
        options={['#E86A3A','#D9482E','#C99A3F','#3F7D6E']}
        onChange={(v)=>setTweak('accent', v)} />
      <TweakSection label="Типографика" />
      <TweakRadio label="Заголовки" value={t.headline}
        options={[{label:'Serif',value:'serif'},{label:'Гротеск',value:'grot'}]}
        onChange={(v)=>setTweak('headline', v)} />
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
