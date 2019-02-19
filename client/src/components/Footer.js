import React from 'react';

export const Footerlanding = (props) => {
  return (
    <div>
      <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Luan's Event Attendance SaaS App</h5>
              <p class="grey-text text-lighten-4">
                1) Sign in by clicking google Sigin
              </p>
              <p class="grey-text text-lighten-4">
                2) click 'add credits'. I'm using test mode StripeAPI to process
                credit card: Email as any email, card number as 4242 4242 4242
                4242, MM/YY: 12/23 cvc:1234. Strip will then process credit card
                and the app will upate credits.
              </p>
              <p class="grey-text text-lighten-4">
                3) Create a new Event email marketing campaign by clicking the
                add button on bottom of page.
              </p>
              <p class="grey-text text-lighten-4">
                4) submit the form. If any recipients responds then the app will
                update the information in each campaign
              </p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Tech Stack:</h5>
              <ul>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Front end: React / Redux
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    CSS Flex box / MaterilaiseCSS CSS / HTML / Javascript
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Backend: Node JS / Express / Google OAuth / StripeAPI
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Database: MongoDB
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            © 2019 Copyright Luan
            <a
              class="grey-text text-lighten-4 right"
              href="https://github.com/LuanB/SaaSEventsApp"
            >
              Github code here
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
