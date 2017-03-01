//call webtask from application
```$.get({
      url: "https://wt-glenn-block-gmail-com-0.run.webtask.io/forismatic-sample",
      json: "json",
      dataType: "json"
    })
    .done(update)
    .fail(handleErr);```