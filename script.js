// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "replikaciya-dashi-kostinoj",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Репликация Даши Костиной",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Ccenter\u003E\r\n  \u003Ch2\u003E\r\n    Здравствуйте, меня зовут Константин. \u003Cbr\u003E \r\n    Спасибо, что решили поучаствовать в моём эксперименте.\r\n    \u003Cbr\u003E\u003Cbr\u003E   \r\n    Нажимите \u003Cspan class=\"key-button\"\u003Eпробел\u003C\u002Fspan\u003E чтобы продоложить. \r\n  \u003C\u002Fh2\u003E\r\n\u003C\u002Fcenter\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "keypress(Space)": "next"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "manual"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "input",
          "label": "Ваше имя",
          "name": "name"
        },
        {
          "required": true,
          "type": "input",
          "label": "Ваш возраст",
          "attributes": {
            "type": "number",
            "min": "1",
            "max": "100"
          },
          "name": "age"
        },
        {
          "required": true,
          "type": "input",
          "label": "Ваше образование",
          "name": "education"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Продолжить",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "end": function anonymous(
) {
this.options.parameters.hallo = 'hallo';
window.biograph_data = this.data;

}
      },
      "title": "biography"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "prime_task": "8 + 4",
          "target_task": "12 + 25",
          "prime_task_answer": 12,
          "prime_task_wronganser": 15,
          "counterbalancing": 1,
          "name": "prime1"
        },
        {
          "prime_task": "6 + 2",
          "target_task": "17 + 12",
          "prime_task_answer": 9,
          "prime_task_wronganser": 7,
          "counterbalancing": 3,
          "name": "prime2"
        },
        {
          "prime_task": "7 + 3",
          "target_task": "19 + 27",
          "prime_task_answer": 10,
          "prime_task_wronganser": 13,
          "counterbalancing": 2,
          "name": "prime3"
        },
        {
          "prime_task": "3 + 2",
          "target_task": "15 + 16",
          "prime_task_answer": 5,
          "prime_task_wronganser": 7,
          "counterbalancing": 3,
          "name": "prime4"
        },
        {
          "prime_task": "9 + 2",
          "target_task": "30 + 22",
          "prime_task_answer": 11,
          "prime_task_wronganser": 9,
          "counterbalancing": 1,
          "name": "prime5"
        },
        {
          "prime_task": "5 + 4",
          "target_task": "22 + 51",
          "prime_task_answer": 9,
          "prime_task_wronganser": 11,
          "counterbalancing": 2,
          "name": "prime6"
        },
        {
          "prime_task": "7 + 4",
          "target_task": "20 + 48",
          "prime_task_answer": 11,
          "prime_task_wronganser": 3,
          "counterbalancing": 2,
          "name": "prime7"
        },
        {
          "prime_task": "5 + 2",
          "target_task": "39 + 23",
          "prime_task_answer": 7,
          "prime_task_wronganser": 5,
          "counterbalancing": 1,
          "name": "prime8"
        },
        {
          "prime_task": "9 + 6",
          "target_task": "32 + 50",
          "prime_task_answer": 15,
          "prime_task_wronganser": 18,
          "counterbalancing": 3,
          "name": "prime9"
        },
        {
          "prime_task": "8 + 9",
          "target_task": "59 + 34",
          "prime_task_answer": 17,
          "prime_task_wronganser": 11,
          "counterbalancing": 1,
          "name": "prime10"
        },
        {
          "prime_task": "9 + 5",
          "target_task": "16 + 50",
          "prime_task_answer": 14,
          "prime_task_wronganser": 15,
          "counterbalancing": 2,
          "name": "prime11"
        },
        {
          "prime_task": "9 + 2",
          "target_task": "39 + 48",
          "prime_task_answer": 11,
          "prime_task_wronganser": 12,
          "counterbalancing": 3,
          "name": "prime12"
        },
        {
          "prime_task": "8 + 7",
          "target_task": "29 + 40",
          "prime_task_answer": 15,
          "prime_task_wronganser": 13,
          "counterbalancing": 3,
          "name": "prime13"
        },
        {
          "prime_task": "4 + 5",
          "target_task": "36 + 58",
          "prime_task_answer": 9,
          "prime_task_wronganser": 8,
          "counterbalancing": 2,
          "name": "prime14"
        },
        {
          "prime_task": "4 + 1",
          "target_task": "54 + 38",
          "prime_task_answer": 5,
          "prime_task_wronganser": 6,
          "counterbalancing": 1,
          "name": "prime15"
        },
        {
          "prime_task": "2 + 6",
          "target_task": "22 + 76",
          "prime_task_answer": 8,
          "prime_task_wronganser": 9,
          "counterbalancing": 2,
          "name": "prime16"
        },
        {
          "prime_task": "8 + 9",
          "target_task": "51 + 43",
          "prime_task_answer": 17,
          "prime_task_wronganser": 15,
          "counterbalancing": 1,
          "name": "prime17"
        },
        {
          "prime_task": "4 + 2",
          "target_task": "53 + 19",
          "prime_task_answer": 6,
          "prime_task_wronganser": 8,
          "counterbalancing": 3,
          "name": "prime18"
        },
        {
          "prime_task": "3 + 4",
          "target_task": "28 + 22",
          "prime_task_answer": 7,
          "prime_task_wronganser": 5,
          "counterbalancing": 2,
          "name": "prime19"
        },
        {
          "prime_task": "2 + 4",
          "target_task": "15 + 58",
          "prime_task_answer": 6,
          "prime_task_wronganser": 9,
          "counterbalancing": 1,
          "name": "prime20"
        },
        {
          "prime_task": "1 + 3",
          "target_task": "25 + 53",
          "prime_task_answer": 4,
          "prime_task_wronganser": 8,
          "counterbalancing": 3,
          "name": "prime21"
        },
        {
          "prime_task": "5 + 3",
          "target_task": "44 + 38",
          "prime_task_answer": 8,
          "prime_task_wronganser": 5,
          "counterbalancing": 2,
          "name": "prime22"
        },
        {
          "prime_task": "8 + 5",
          "target_task": "11 + 27",
          "prime_task_answer": 13,
          "prime_task_wronganser": 15,
          "counterbalancing": 3,
          "name": "prime23"
        },
        {
          "prime_task": "6 + 6",
          "target_task": "50 + 29",
          "prime_task_answer": 12,
          "prime_task_wronganser": 13,
          "counterbalancing": 1,
          "name": "prime24"
        },
        {
          "prime_task": "2 + 3",
          "target_task": "22 + 16",
          "prime_task_answer": 5,
          "prime_task_wronganser": 2,
          "counterbalancing": 1,
          "name": "prime25"
        },
        {
          "prime_task": "7 + 6",
          "target_task": "56 + 29",
          "prime_task_answer": 13,
          "prime_task_wronganser": 18,
          "counterbalancing": 2,
          "name": "prime26"
        },
        {
          "prime_task": "6 + 3",
          "target_task": "26 + 72",
          "prime_task_answer": 9,
          "prime_task_wronganser": 7,
          "counterbalancing": 3,
          "name": "prime27"
        },
        {
          "prime_task": "8 + 2",
          "target_task": "67 + 19",
          "prime_task_answer": 10,
          "prime_task_wronganser": 11,
          "counterbalancing": 1,
          "name": "prime28"
        },
        {
          "prime_task": "7 + 4",
          "target_task": "27 + 35",
          "prime_task_answer": 11,
          "prime_task_wronganser": 10,
          "counterbalancing": 3,
          "name": "prime29"
        },
        {
          "prime_task": "7 + 8",
          "target_task": "48 + 25",
          "prime_task_answer": 15,
          "prime_task_wronganser": 19,
          "counterbalancing": 2,
          "name": "prime30"
        }
      ],
      "sample": {
        "mode": "sequential"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
window.params = window
    .location
    .search
    .replace('?','')
    .split('&')
    .reduce(
        function(p,e){
            var a = e.split('=');
            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        },
        {}
    );

window.counterbalancing_list = {}

console.log(window.params['key'])
var xmlhttp = new XMLHttpRequest(),
    sliceFormData = new FormData(),
    theUrl = "https://experiments-server.herokuapp.com/key/";
sliceFormData.append("key", JSON.stringify(window.params['key']));
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
      if(xmlhttp.responseText == 'NO USER') {
        window.params['key'] = 'NO USER'
      } else {
        let data = JSON.parse(xmlhttp.responseText)
        window.counterbalancing_list = data
      }
    }
}
xmlhttp.open("POST", theUrl, false);
xmlhttp.send(sliceFormData);

let params = this.internals.parsedOptions.templateParameters
if (Object.keys(window.counterbalancing_list).length === 0) {
  for (var i in params) {
    let index = parseInt(i) + parseInt(1)
    console.log('prime' + index)
    window.counterbalancing_list['prime' + index] = params[i].counterbalancing
  }
}


console.log(window.counterbalancing_list)


}
      },
      "title": "arithmetic_loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "comp",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter\u003E\r\n  \u003Ch2\u003E&&&&&&&&&&\u003C\u002Fh2\u003E\r\n  \u003Ch2 class=\"h2_and top\"\u003E&&&&&&&&&&\u003C\u002Fh2\u003E\r\n  \u003Ch2 class=\"h2_and bottom\"\u003E&&&&&&&&&&\u003C\u002Fh2\u003E\r\n\u003C\u002Fcenter\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "start_mask",
            "timeout": "200"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter\u003E\r\n  \u003Ch2\u003E \r\n    ${ window.counterbalancing_list[parameters.name] != 3 ? parameters.prime_task : \"xxxxxx\" }\r\n  \u003Ch2\u003E\r\n\u003C\u002Fcenter\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
//alert(window.biograph_data.group_choice)
}
            },
            "title": "prime_task",
            "timeout": "17"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter\u003E\r\n  \u003Ch2\u003EXXXXXXXXXX\u003C\u002Fh2\u003E\r\n  \u003Ch2 class=\"h2_x top\"\u003EXXXXXXXXXX\u003C\u002Fh2\u003E\r\n  \u003Ch2 class=\"h2_x bottom\"\u003EXXXXXXXXXX\u003C\u002Fh2\u003E\r\n\u003C\u002Fcenter\u003E ",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "middle_mask",
            "timeout": "500"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter\u003E\r\n  \u003Ch2\u003E${ parameters.target_task }\u003C\u002Fh2\u003E\r\n\u003C\u002Fcenter\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "target_task",
            "timeout": "400"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter\u003E\r\n  \u003Ch2\u003E\r\n    ${ window.counterbalancing_list[parameters.name] != 3 ? (\r\n      window.counterbalancing_list[parameters.name] == 1 ? (parameters.prime_task + ' = ' + parameters.prime_task_answer) : (parameters.prime_task + ' = ' + parameters.prime_task_wronganser)\r\n      ) : \"xxxxxx\" } \r\n  \u003C\u002Fh2\u003E\r\n\u003C\u002Fcenter\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
console.log(window.iterator)
}
            },
            "title": "prime_task_answer",
            "timeout": "17"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter\u003E\r\n  \u003Ch2\u003EXXXXXXXXXX\u003C\u002Fh2\u003E\r\n  \u003Ch2 class=\"h2_x top\"\u003EXXXXXXXXXX\u003C\u002Fh2\u003E\r\n  \u003Ch2 class=\"h2_x bottom\"\u003EXXXXXXXXXX\u003C\u002Fh2\u003E\r\n\u003C\u002Fcenter\u003E ",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "end_mask",
            "timeout": "50"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter\u003E\r\n  \u003Ch2\u003E${ parameters.target_task }\u003C\u002Fh2\u003E\r\n  \u003Cinput name=\"target_task_answer\" type=\"text\" placeholder=\"значение\" id=\"input_${ parameters.name }\" autofocus\u003E\r\n\u003C\u002Fcenter\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Продолжить",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": "done"
            },
            "parameters": {},
            "messageHandlers": {
              "end": function anonymous(
) {
window.timeout_message_show = this.data.ended_on == 'timeout'
}
            },
            "title": "target_task_answer",
            "timeout": "7000",
            "timeline": []
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter\u003E\r\n  \u003Ch2\u003EВремя вышло!\u003C\u002Fh2\u003E\r\n\u003C\u002Fcenter\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "after:prepare": function anonymous(
) {
if (window.timeout_message_show)
  this.options.skip = false
else
  this.options.skip = true
}
            },
            "title": "timeout_message",
            "tardy": true,
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Ccenter\u003E\r\n  \u003Ch2\u003E\r\n    Спасибо, что поучаствовали в моём эксперименте. \r\n  \u003C\u002Fh2\u003E\r\n\u003C\u002Fcenter\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "end": function anonymous(
) {
alert('Пожалуйста нажмите на кнопку Download Data (чтобы скачать файл с результатами) и перекиньте скаченный файл мне.')
}
      },
      "title": "thx",
      "timeout": "1500"
    }
  ]
})

// Let's go!
study.run()