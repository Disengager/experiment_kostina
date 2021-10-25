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
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
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
          "content": "\u003Ccenter\u003E\r\n  \u003Ch2\u003E\r\n    Здравствуйте, меня зовут Константин. Пожалуйста пройдите тест.\r\n    \u003Cbr\u003E\u003Cbr\u003E\r\n    Во время эксперимента вам необходимо нажимать клавишу \u003Cspan class=\"key-button\"\u003Eq\u003C\u002Fspan\u003E, если цвет несоотвествуют тексту и \u003Cspan class=\"key-button\"\u003Ew\u003C\u002Fspan\u003E, если соотвествует.\r\n    \u003Cbr\u003E\u003Cbr\u003E   \r\n    Нажимите \u003Cspan class=\"key-button\"\u003Eпробел\u003C\u002Fspan\u003E чтобы продоложить. \r\n  \u003C\u002Fh2\u003E\r\n\u003C\u002Fcenter\u003E",
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
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "word": "красный",
          "color": "red"
        },
        {
          "word": "синий",
          "color": "red"
        },
        {
          "word": "фиолетовый",
          "color": "purple"
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
      "messageHandlers": {},
      "title": "stroop_loop",
      "indexParameter": "counter",
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
                "content": "\u003Ccenter\u003E\u003Ch3\u003E+\u003C\u002Fh3\u003E\u003C\u002Fcenter\u003E",
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
            "title": "cross",
            "timeout": "500"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter\u003E\r\n  \u003Ch2 style=\"color: ${ parameters.color }\"\u003E${ parameters.word }\u003C\u002Fh2\u003E\r\n\u003C\u002Fcenter\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "keypress(q, й)": "нет",
              "keypress(w, ц)": "да"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "stroop_page",
            "plugins": []
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text"
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
            "title": "interval",
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
alert('this is the end')

}
      },
      "title": "thx",
      "timeout": "1500"
    }
  ]
})

// Let's go!
study.run()