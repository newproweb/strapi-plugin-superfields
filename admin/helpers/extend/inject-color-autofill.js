import {
  strapiPrimaryButtonStyle,
} from './btn-style';

export const injectColorPickerButton = () => {
  const interval = setInterval(() => {
    const modal = document.querySelector('[role="dialog"]');
    if (!modal) return;

    const isColorPickerField = 
        modal.querySelector('h2').innerText.includes('Add new Tooltip Color Picker field') 

    if (!isColorPickerField) return;
    const firstInnerDiv = modal.querySelector('header > div');
    if (!firstInnerDiv) return;

    if (firstInnerDiv.querySelector('.color-autofill-btn')) return;

    const btn = document.createElement('button');
    btn.innerText = 'Fill saved colors';
    btn.className = 'color-autofill-btn';
    btn.style.cssText = strapiPrimaryButtonStyle;

    btn.addEventListener('mouseenter', () => {
      btn.style.backgroundColor = '#7b79ff';
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.backgroundColor = '#4945ff'; 
    });
    
    btn.addEventListener('focus', () => {
      btn.style.boxShadow = '0px 0px 0px 2px #4945ff'; 
    });
    
    btn.addEventListener('blur', () => {
      btn.style.boxShadow = '0px 1px 4px rgba(33, 33, 52, 0.1)'; 
    });
    

    btn.onclick = async () => {
      try {
        const res = await fetch('/superfields/colors');
        const data = await res.json();
        if (data?.length) {
          const coreectedData = data.map(color => color.hex);
          console.log('coreectedData', coreectedData)
          const jsonStr = JSON.stringify(coreectedData, null, 2);
          const textarea = modal.querySelector('.cm-editor textarea');
          if (textarea) {
            textarea.value = jsonStr;
            textarea.dispatchEvent(new Event('input', { bubbles: true }));
          }


          const codeMirrorDiv = modal.querySelector('.cm-content');
          if (codeMirrorDiv) {
            const lines = jsonStr
              .split('\n')
              .map(line => `<div class="cm-line">${line}</div>`)
              .join('');
            codeMirrorDiv.innerHTML = lines;
          }
        }
      } catch (err) {
        console.error('Error fetching colors:', err);
      }
    };


    firstInnerDiv.insertBefore(btn, firstInnerDiv.firstChild.nextSibling.nextSibling);
    clearInterval(interval);
  }, 1000);
};
