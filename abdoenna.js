function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function writeOnConsole() {
    const cmd_text = [
      'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym.',
      'Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.',
      'Pięć wieków później zaczął być używany w przemyśle elektronicznym, pozostając praktycznie niezmienionym.',
      'Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ];
  
    const board = document.querySelector('.console');
    await sleep(1000);
  
  
    for (let i=0; i<=cmd_text.length; ++i) {
      const span = document.createElement('span');
      span.setAttribute('class', 'cmd-line cmd-text');
      board.appendChild(span);
  
      if (i < cmd_text.length) {
        await sleep(1000);
  
        for (let j=0; j<cmd_text[i].length; ++j) {
          span.textContent += cmd_text[i][j];
          await sleep(32);
        }
  
        await sleep(700);
        if (i<cmd_text.length) {
          span.classList.remove('cmd-line');
          span.classList.add('cmd-line-enter');
        }
      } else {
        span.setAttribute('contentEditable', 'true');
      }
    }
  }
  
  window.onload = () => {
    writeOnConsole();
  }
  
  
  
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
   
  async function writeOnConsole() {
    const cmd_text = [
      'Ennajari Abdellah, a dedicated Full-Stack Developer, is a name synonymous with passion, expertise, and innovation in the realm of technology. With a journey marked by significant academic achievements and hands-on experience, Ennajari stands as a true professional in the field.',
      "From the early days of specialization in Physical and Chemical Sciences, encompassing the complexities of physics and chemistry, to honing skills in mathematics and computer science during BAC+1 in Mathematical and Computer Sciences, Ennajari's commitment to excellence is evident. This journey culminated in the acquisition of a Diploma of General University Studies in Mathematical and Computer Sciences (SMI) from the esteemed Polydisciplinary Faculty of Ouarzazate, solidifying a profound understanding of mathematics and computer science",
      "Ennajari's journey encapsulates a passionate student of computer mathematics, poised to create innovative solutions and make a positive impact on the ever-evolving landscape of technology. With unwavering determination and an insatiable curiosity, Ennajari is set to continue contributing to dynamic technological projects with boundless enthusiasm.",
      'Active GitHub profile: github.com/ennajari'
    ];
   
    const board = document.querySelector('.console');
    await sleep(1000);
   
   
    for (let i=0; i<cmd_text.length; ++i) {
      const span = document.createElement('span');
      span.setAttribute('class', 'cmd-line cmd-text');
   
      board.appendChild(span);
      await sleep(1000);
   
      for (let j=0; j<cmd_text[i].length; ++j) {
        span.textContent += cmd_text[i][j];
        await sleep(32);
      }
   
      await sleep(700);
      if (i<cmd_text.length - 1) {
        span.classList.remove('cmd-line');
        span.classList.add('cmd-line-enter');
      }
    }
  }
   
  window.onload = () => {
    writeOnConsole();
  }
  
  