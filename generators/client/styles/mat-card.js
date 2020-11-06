const matCard = {
    style: `
    .mat-card {
        padding: 0px!important;

        .mat-card-header {
          border-radius: 4px;
          background-image: linear-gradient(#becacf, #fff);
        }

        .mat-card-content ul.no-bullets {
          padding-left: 15px;

          li {
            list-style: none;
            display: flex;

            .mat-icon {
              margin-right: 5px;
            }
          }
        }

        .mat-card-actions {
          display: flex!important;
          justify-content: flex-end;
          background-image: linear-gradient(#fff, #eee);
          margin: 0!important;
          padding: 0!important;
        }

      }`,
    comment:
        'Material Card Style. Customize this for all generated cards, or copy it to the entity component scss file to customize cards for individual entities.'
};

module.exports = {
    matCard
};
