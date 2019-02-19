const keys = require('../../config/keys');

module.exports = (survey) => {
  return `
    <html>
    <body>
    <div style="text-align: center;">
    <h3>Dont miss this event!</h3>
    <p>Please reserve your spot now:</p>
    <p>${survey.body}</p>
    <div>
    <a href="${keys.redirectDomain}/api/surveys/${
    survey.id
  }/yes">Yes reserve my spot</a>
  </div>
  <div>
  <a href="${keys.redirectDomain}/api/surveys/${
    survey.id
  }/no">No thank you, I have something on that day</a>
</div>
  
    </div>
    </body>
  </html>
  `;
};
