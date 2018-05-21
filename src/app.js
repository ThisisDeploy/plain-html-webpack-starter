import './fonts/fonts.scss'
import 'normalize.css'
import './main.scss'
import i18next from 'i18next'

import english from './languages/en'
import swedish from './languages/se'

window.onload = () => {
  document.body.style.display = "block"

  const langParam = findGetParameter("lang")

  i18next.init({
    lng: 'en',
    debug: true,
    resources: {
      en: english,
      se: swedish
    }
  }, (err, t) => {
    changeLanguage(langParam || 'en')
    window.changeLanguage = changeLanguage
  })

  function changeLanguage(l) {
    document.body.setAttribute('data-language', l)
    i18next.changeLanguage(l, (err, t) => {
      if (err) return console.log('something went wrong loading', err)
      updateLanguageOfElements(t)
      correctLinks(l)
    })
  }

  function updateLanguageOfElements(t) {
    const translatedElements = document.querySelectorAll('[data-t]')
    for(let i = 0; i < translatedElements.length; i++) {
      const currentElement = translatedElements[i]
      const key = currentElement.dataset['t']
      currentElement.innerHTML = t(key)
    }
  }
}

function correctLinks(lang) {
  const links = document.querySelectorAll('a[href]')
  for (let i = 0; i < links.length; i++) {
    if(links[i].getAttribute('data-skip')) return
    let currentLink = links[i].getAttribute('href')
    links[i].setAttribute('href', updateQueryStringParameter(currentLink, 'lang', lang))
  }
}

function findGetParameter(parameterName) {
    let result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

function updateQueryStringParameter(uri, key, value) {
  let re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  let separator = uri.indexOf('?') !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + "=" + value + '$2');
  }
  else {
    return uri + separator + key + "=" + value;
  }
}
