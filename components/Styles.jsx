import React from 'react';
const Styles = () => (<>
  <style jsx global>{`      
      html, body, div, span, applet, object,
      iframe, h1, h2, h3, h4, h5, h6, p, blockquote,
      pre, a, abbr, acronym, address, big, cite,
      code, del, dfn, em, img, ins, kbd, q, s, samp,
      small, strike, strong, sub, sup, tt, var, b,
      u, i, center, dl, dt, dd, ol, ul, li, fieldset,
      form, label, legend, table, caption, tbody,
      tfoot, thead, tr, th, td, article, aside,
      canvas, details, embed, figure, figcaption,
      footer, header, hgroup, menu, nav, output, ruby,
      section, summary, time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;        
        font-family: Nunito, Arial, Helvetica, sans-serif;
      }
      
      article, aside, details, figcaption, figure,
      footer, header, hgroup, menu, nav, section {
        display: block;}
      
      body {
        line-height: 1;
      }
      
      ol, ul {
        list-style: none;
      }
      
      blockquote, q {
        quotes: none;
      }
      
        blockquote:before, blockquote:after, q:before, q:after {
          content: '';
          content: none;
        }
      
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      
      body {
        -webkit-text-size-adjust: none;
      }
      
      mark {
        background-color: transparent;
        color: inherit;
      }
      
      input::-moz-focus-inner {
        border: 0;
        padding: 0;
      }
      
      input, select, textarea {
        -moz-appearance: none;
        -webkit-appearance: none;
        -ms-appearance: none;
        appearance: none;
      }
      
      /* Basic */
      
        @-ms-viewport {
          width: device-width;
        }
      
        body {
          -ms-overflow-style: scrollbar;
        }
      
        @media screen and (max-width: 360px) {
      
          html, body {
            min-width: 320px;
          }
      
        }
      
        html {
          box-sizing: border-box;
        }
      
        *, *:before, *:after {
          box-sizing: inherit;
        }
      
        body {
          background: #ffffff;
        }
      
          body.is-preload *, body.is-preload *:before, body.is-preload *:after {
            -moz-animation: none !important;
            -webkit-animation: none !important;
            -ms-animation: none !important;
            animation: none !important;
            -moz-transition: none !important;
            -webkit-transition: none !important;
            -ms-transition: none !important;
            transition: none !important;
          }
      
      /* Type */
      
        body {
          color: #999999;
        }
      
        html, input, select, textarea {
          font-size: 16pt;
        }
      
          @media screen and (max-width: 1680px) {
      
            html, input, select, textarea {
              font-size: 13pt;
            }
      
          }
      
          @media screen and (max-width: 1280px) {
      
            html, input, select, textarea {
              font-size: 12pt;
            }
      
          }
      
          @media screen and (max-width: 360px) {
      
            html, input, select, textarea {
              font-size: 11pt;
            }
      
          }
      
        body, input, select, textarea {
          font-family: Nunito, Arial, Helvetica, sans-serif;
          font-weight: normal;
          line-height: 1.5em;
          letter-spacing: -0.015em;
        }
      
        a {
          -moz-transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
          -webkit-transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
          -ms-transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
          transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
          text-decoration: none;
          border-bottom: dotted 1px;
        }
      
          a:hover {
            border-bottom-color: transparent !important;
          }
      
        strong, b {
          font-weight: bold;
        }
      
        em, i {
          font-style: italic;
        }
      
        p {
          margin: 0 0 2em 0;
        }
      
        h1, h2, h3, h4, h5, h6 {
          font-weight: normal;
          line-height: 1em;
          margin: 0 0 1em 0;
          letter-spacing: -0.0125em;
        }
      
          h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
            color: inherit;
            text-decoration: none;
            border-bottom: none;
          }
      
          @media screen and (max-width: 980px) {
      
            h1 br, h2 br, h3 br, h4 br, h5 br, h6 br {
              display: none;
            }
      
          }
      
        h2 {
          font-size: 1.75em;
          line-height: 1.5em;
        }
      
        h3 {
          font-size: 1.5em;
          line-height: 1.5em;
        }
      
        h4 {
          font-size: 1.1em;
          line-height: 1.5em;
        }
      
        h5 {
          font-size: 0.9em;
          line-height: 1.5em;
        }
      
        h6 {
          font-size: 0.7em;
          line-height: 1.5em;
        }
      
        @media screen and (max-width: 736px) {
      
          h2 {
            font-size: 1.25em;
          }
      
          h3 {
            font-size: 1.2em;
          }
      
          h4 {
            font-size: 1em;
          }
      
        }
      
        sub {
          font-size: 0.8em;
          position: relative;
          top: 0.5em;
        }
      
        sup {
          font-size: 0.8em;
          position: relative;
          top: -0.5em;
        }
      
        blockquote {
          border-left-style: solid;
          border-left-width: 4px;
          font-style: italic;
          margin: 0 0 2em 0;
          padding: 0.5em 0 0.5em 2em;
        }
      
        code {
          border-radius: 6px;
          border-style: solid;
          border-width: 1px;
          font-family: "Courier New", monospace;
          font-size: 0.9em;
          margin: 0 0.25em;
          padding: 0.25em 0.65em;
        }
      
        pre {
          -webkit-overflow-scrolling: touch;
          font-family: "Courier New", monospace;
          font-size: 0.9em;
          margin: 0 0 2em 0;
        }
      
          pre code {
            display: block;
            line-height: 1.75em;
            padding: 1em 1.5em;
            overflow-x: auto;
          }
      
        hr {
          border: 0;
          border-bottom-style: solid;
          border-bottom-width: 1px;
          margin: 2em 0;
        }
      
          hr.major {
            margin: 3em 0;
          }
      
        .align-left {
          text-align: left;
        }
      
        .align-center {
          text-align: center;
        }
      
        .align-right {
          text-align: right;
        }
      
        input, select, textarea {
          color: #999999;
        }
      
        a {
          color: inherit;
          border-bottom-color: #d6d6d6;
        }
      
          a:hover {
            color: #A8D0E6;
          }
      
        strong, b {
          color: #828282;
        }
      
        h1, h2, h3, h4, h5, h6 {
          color: #828282;
        }
      
        blockquote {
          border-left-color: #e6e6e6;
        }
      
        code {
          background: rgba(144, 144, 144, 0.075);
          border-color: #e6e6e6;
        }
      
        hr {
          border-bottom-color: #e6e6e6;
        }
      
      /* Row */
      
        .row {
          display: flex;
          flex-wrap: wrap;
          box-sizing: border-box;
          align-items: stretch;
        }
      
          .row > * {
            box-sizing: border-box;
          }
      
          .row.gtr-uniform > * > :last-child {
            margin-bottom: 0;
          }
      
          .row.aln-left {
            justify-content: flex-start;
          }
      
          .row.aln-center {
            justify-content: center;
          }
      
          .row.aln-right {
            justify-content: flex-end;
          }
      
          .row.aln-top {
            align-items: flex-start;
          }
      
          .row.aln-middle {
            align-items: center;
          }
      
          .row.aln-bottom {
            align-items: flex-end;
          }
      
          .row > .imp {
            order: -1;
          }
      
          .row > .col-1 {
            width: 8.3333333333%;
          }
      
          .row > .off-1 {
            margin-left: 8.3333333333%;
          }
      
          .row > .col-2 {
            width: 16.6666666667%;
          }
      
          .row > .off-2 {
            margin-left: 16.6666666667%;
          }
      
          .row > .col-3 {
            width: 25%;
          }
      
          .row > .off-3 {
            margin-left: 25%;
          }
      
          .row > .col-4 {
            width: 33.3333333333%;
          }
      
          .row > .off-4 {
            margin-left: 33.3333333333%;
          }
      
          .row > .col-5 {
            width: 41.6666666667%;
          }
      
          .row > .off-5 {
            margin-left: 41.6666666667%;
          }
      
          .row > .col-6 {
            width: 50%;
          }
      
          .row > .off-6 {
            margin-left: 50%;
          }
      
          .row > .col-7 {
            width: 58.3333333333%;
          }
      
          .row > .off-7 {
            margin-left: 58.3333333333%;
          }
      
          .row > .col-8 {
            width: 66.6666666667%;
          }
      
          .row > .off-8 {
            margin-left: 66.6666666667%;
          }
      
          .row > .col-9 {
            width: 75%;
          }
      
          .row > .off-9 {
            margin-left: 75%;
          }
      
          .row > .col-10 {
            width: 83.3333333333%;
          }
      
          .row > .off-10 {
            margin-left: 83.3333333333%;
          }
      
          .row > .col-11 {
            width: 91.6666666667%;
          }
      
          .row > .off-11 {
            margin-left: 91.6666666667%;
          }
      
          .row > .col-12 {
            width: 100%;
          }
      
          .row > .off-12 {
            margin-left: 100%;
          }
      
          .row.gtr-0 {
            margin-top: 0;
            margin-left: 0em;
          }
      
            .row.gtr-0 > * {
              padding: 0 0 0 0em;
            }
      
            .row.gtr-0.gtr-uniform {
              margin-top: 0em;
            }
      
              .row.gtr-0.gtr-uniform > * {
                padding-top: 0em;
              }
      
          .row.gtr-25 {
            margin-top: 0;
            margin-left: -0.375em;
          }
      
            .row.gtr-25 > * {
              padding: 0 0 0 0.375em;
            }
      
            .row.gtr-25.gtr-uniform {
              margin-top: -0.375em;
            }
      
              .row.gtr-25.gtr-uniform > * {
                padding-top: 0.375em;
              }
      
          .row.gtr-50 {
            margin-top: 0;
            margin-left: -0.75em;
          }
      
            .row.gtr-50 > * {
              padding: 0 0 0 0.75em;
            }
      
            .row.gtr-50.gtr-uniform {
              margin-top: -0.75em;
            }
      
              .row.gtr-50.gtr-uniform > * {
                padding-top: 0.75em;
              }
      
          .row {
            margin-top: 0;
            margin-left: -1.5em;
          }
      
            .row > * {
              padding: 0 0 0 1.5em;
            }
      
            .row.gtr-uniform {
              margin-top: -1.5em;
            }
      
              .row.gtr-uniform > * {
                padding-top: 1.5em;
              }
      
          .row.gtr-150 {
            margin-top: 0;
            margin-left: -2.25em;
          }
      
            .row.gtr-150 > * {
              padding: 0 0 0 2.25em;
            }
      
            .row.gtr-150.gtr-uniform {
              margin-top: -2.25em;
            }
      
              .row.gtr-150.gtr-uniform > * {
                padding-top: 2.25em;
              }
      
          .row.gtr-200 {
            margin-top: 0;
            margin-left: -3em;
          }
      
            .row.gtr-200 > * {
              padding: 0 0 0 3em;
            }
      
            .row.gtr-200.gtr-uniform {
              margin-top: -3em;
            }
      
              .row.gtr-200.gtr-uniform > * {
                padding-top: 3em;
              }
      
          @media screen and (max-width: 1680px) {
      
            .row {
              display: flex;
              flex-wrap: wrap;
              box-sizing: border-box;
              align-items: stretch;
            }
      
              .row > * {
                box-sizing: border-box;
              }
      
              .row.gtr-uniform > * > :last-child {
                margin-bottom: 0;
              }
      
              .row.aln-left {
                justify-content: flex-start;
              }
      
              .row.aln-center {
                justify-content: center;
              }
      
              .row.aln-right {
                justify-content: flex-end;
              }
      
              .row.aln-top {
                align-items: flex-start;
              }
      
              .row.aln-middle {
                align-items: center;
              }
      
              .row.aln-bottom {
                align-items: flex-end;
              }
      
              .row > .imp-xlarge {
                order: -1;
              }
      
              .row > .col-1-xlarge {
                width: 8.3333333333%;
              }
      
              .row > .off-1-xlarge {
                margin-left: 8.3333333333%;
              }
      
              .row > .col-2-xlarge {
                width: 16.6666666667%;
              }
      
              .row > .off-2-xlarge {
                margin-left: 16.6666666667%;
              }
      
              .row > .col-3-xlarge {
                width: 25%;
              }
      
              .row > .off-3-xlarge {
                margin-left: 25%;
              }
      
              .row > .col-4-xlarge {
                width: 33.3333333333%;
              }
      
              .row > .off-4-xlarge {
                margin-left: 33.3333333333%;
              }
      
              .row > .col-5-xlarge {
                width: 41.6666666667%;
              }
      
              .row > .off-5-xlarge {
                margin-left: 41.6666666667%;
              }
      
              .row > .col-6-xlarge {
                width: 50%;
              }
      
              .row > .off-6-xlarge {
                margin-left: 50%;
              }
      
              .row > .col-7-xlarge {
                width: 58.3333333333%;
              }
      
              .row > .off-7-xlarge {
                margin-left: 58.3333333333%;
              }
      
              .row > .col-8-xlarge {
                width: 66.6666666667%;
              }
      
              .row > .off-8-xlarge {
                margin-left: 66.6666666667%;
              }
      
              .row > .col-9-xlarge {
                width: 75%;
              }
      
              .row > .off-9-xlarge {
                margin-left: 75%;
              }
      
              .row > .col-10-xlarge {
                width: 83.3333333333%;
              }
      
              .row > .off-10-xlarge {
                margin-left: 83.3333333333%;
              }
      
              .row > .col-11-xlarge {
                width: 91.6666666667%;
              }
      
              .row > .off-11-xlarge {
                margin-left: 91.6666666667%;
              }
      
              .row > .col-12-xlarge {
                width: 100%;
              }
      
              .row > .off-12-xlarge {
                margin-left: 100%;
              }
      
              .row.gtr-0 {
                margin-top: 0;
                margin-left: 0em;
              }
      
                .row.gtr-0 > * {
                  padding: 0 0 0 0em;
                }
      
                .row.gtr-0.gtr-uniform {
                  margin-top: 0em;
                }
      
                  .row.gtr-0.gtr-uniform > * {
                    padding-top: 0em;
                  }
      
              .row.gtr-25 {
                margin-top: 0;
                margin-left: -0.375em;
              }
      
                .row.gtr-25 > * {
                  padding: 0 0 0 0.375em;
                }
      
                .row.gtr-25.gtr-uniform {
                  margin-top: -0.375em;
                }
      
                  .row.gtr-25.gtr-uniform > * {
                    padding-top: 0.375em;
                  }
      
              .row.gtr-50 {
                margin-top: 0;
                margin-left: -0.75em;
              }
      
                .row.gtr-50 > * {
                  padding: 0 0 0 0.75em;
                }
      
                .row.gtr-50.gtr-uniform {
                  margin-top: -0.75em;
                }
      
                  .row.gtr-50.gtr-uniform > * {
                    padding-top: 0.75em;
                  }
      
              .row {
                margin-top: 0;
                margin-left: -1.5em;
              }
      
                .row > * {
                  padding: 0 0 0 1.5em;
                }
      
                .row.gtr-uniform {
                  margin-top: -1.5em;
                }
      
                  .row.gtr-uniform > * {
                    padding-top: 1.5em;
                  }
      
              .row.gtr-150 {
                margin-top: 0;
                margin-left: -2.25em;
              }
      
                .row.gtr-150 > * {
                  padding: 0 0 0 2.25em;
                }
      
                .row.gtr-150.gtr-uniform {
                  margin-top: -2.25em;
                }
      
                  .row.gtr-150.gtr-uniform > * {
                    padding-top: 2.25em;
                  }
      
              .row.gtr-200 {
                margin-top: 0;
                margin-left: -3em;
              }
      
                .row.gtr-200 > * {
                  padding: 0 0 0 3em;
                }
      
                .row.gtr-200.gtr-uniform {
                  margin-top: -3em;
                }
      
                  .row.gtr-200.gtr-uniform > * {
                    padding-top: 3em;
                  }
      
          }
      
          @media screen and (max-width: 1280px) {
      
            .row {
              display: flex;
              flex-wrap: wrap;
              box-sizing: border-box;
              align-items: stretch;
            }
      
              .row > * {
                box-sizing: border-box;
              }
      
              .row.gtr-uniform > * > :last-child {
                margin-bottom: 0;
              }
      
              .row.aln-left {
                justify-content: flex-start;
              }
      
              .row.aln-center {
                justify-content: center;
              }
      
              .row.aln-right {
                justify-content: flex-end;
              }
      
              .row.aln-top {
                align-items: flex-start;
              }
      
              .row.aln-middle {
                align-items: center;
              }
      
              .row.aln-bottom {
                align-items: flex-end;
              }
      
              .row > .imp-large {
                order: -1;
              }
      
              .row > .col-1-large {
                width: 8.3333333333%;
              }
      
              .row > .off-1-large {
                margin-left: 8.3333333333%;
              }
      
              .row > .col-2-large {
                width: 16.6666666667%;
              }
      
              .row > .off-2-large {
                margin-left: 16.6666666667%;
              }
      
              .row > .col-3-large {
                width: 25%;
              }
      
              .row > .off-3-large {
                margin-left: 25%;
              }
      
              .row > .col-4-large {
                width: 33.3333333333%;
              }
      
              .row > .off-4-large {
                margin-left: 33.3333333333%;
              }
      
              .row > .col-5-large {
                width: 41.6666666667%;
              }
      
              .row > .off-5-large {
                margin-left: 41.6666666667%;
              }
      
              .row > .col-6-large {
                width: 50%;
              }
      
              .row > .off-6-large {
                margin-left: 50%;
              }
      
              .row > .col-7-large {
                width: 58.3333333333%;
              }
      
              .row > .off-7-large {
                margin-left: 58.3333333333%;
              }
      
              .row > .col-8-large {
                width: 66.6666666667%;
              }
      
              .row > .off-8-large {
                margin-left: 66.6666666667%;
              }
      
              .row > .col-9-large {
                width: 75%;
              }
      
              .row > .off-9-large {
                margin-left: 75%;
              }
      
              .row > .col-10-large {
                width: 83.3333333333%;
              }
      
              .row > .off-10-large {
                margin-left: 83.3333333333%;
              }
      
              .row > .col-11-large {
                width: 91.6666666667%;
              }
      
              .row > .off-11-large {
                margin-left: 91.6666666667%;
              }
      
              .row > .col-12-large {
                width: 100%;
              }
      
              .row > .off-12-large {
                margin-left: 100%;
              }
      
              .row.gtr-0 {
                margin-top: 0;
                margin-left: 0em;
              }
      
                .row.gtr-0 > * {
                  padding: 0 0 0 0em;
                }
      
                .row.gtr-0.gtr-uniform {
                  margin-top: 0em;
                }
      
                  .row.gtr-0.gtr-uniform > * {
                    padding-top: 0em;
                  }
      
              .row.gtr-25 {
                margin-top: 0;
                margin-left: -0.375em;
              }
      
                .row.gtr-25 > * {
                  padding: 0 0 0 0.375em;
                }
      
                .row.gtr-25.gtr-uniform {
                  margin-top: -0.375em;
                }
      
                  .row.gtr-25.gtr-uniform > * {
                    padding-top: 0.375em;
                  }
      
              .row.gtr-50 {
                margin-top: 0;
                margin-left: -0.75em;
              }
      
                .row.gtr-50 > * {
                  padding: 0 0 0 0.75em;
                }
      
                .row.gtr-50.gtr-uniform {
                  margin-top: -0.75em;
                }
      
                  .row.gtr-50.gtr-uniform > * {
                    padding-top: 0.75em;
                  }
      
              .row {
                margin-top: 0;
                margin-left: -1.5em;
              }
      
                .row > * {
                  padding: 0 0 0 1.5em;
                }
      
                .row.gtr-uniform {
                  margin-top: -1.5em;
                }
      
                  .row.gtr-uniform > * {
                    padding-top: 1.5em;
                  }
      
              .row.gtr-150 {
                margin-top: 0;
                margin-left: -2.25em;
              }
      
                .row.gtr-150 > * {
                  padding: 0 0 0 2.25em;
                }
      
                .row.gtr-150.gtr-uniform {
                  margin-top: -2.25em;
                }
      
                  .row.gtr-150.gtr-uniform > * {
                    padding-top: 2.25em;
                  }
      
              .row.gtr-200 {
                margin-top: 0;
                margin-left: -3em;
              }
      
                .row.gtr-200 > * {
                  padding: 0 0 0 3em;
                }
      
                .row.gtr-200.gtr-uniform {
                  margin-top: -3em;
                }
      
                  .row.gtr-200.gtr-uniform > * {
                    padding-top: 3em;
                  }
      
          }
      
          @media screen and (max-width: 980px) {
      
            .row {
              display: flex;
              flex-wrap: wrap;
              box-sizing: border-box;
              align-items: stretch;
            }
      
              .row > * {
                box-sizing: border-box;
              }
      
              .row.gtr-uniform > * > :last-child {
                margin-bottom: 0;
              }
      
              .row.aln-left {
                justify-content: flex-start;
              }
      
              .row.aln-center {
                justify-content: center;
              }
      
              .row.aln-right {
                justify-content: flex-end;
              }
      
              .row.aln-top {
                align-items: flex-start;
              }
      
              .row.aln-middle {
                align-items: center;
              }
      
              .row.aln-bottom {
                align-items: flex-end;
              }
      
              .row > .imp-medium {
                order: -1;
              }
      
              .row > .col-1-medium {
                width: 8.3333333333%;
              }
      
              .row > .off-1-medium {
                margin-left: 8.3333333333%;
              }
      
              .row > .col-2-medium {
                width: 16.6666666667%;
              }
      
              .row > .off-2-medium {
                margin-left: 16.6666666667%;
              }
      
              .row > .col-3-medium {
                width: 25%;
              }
      
              .row > .off-3-medium {
                margin-left: 25%;
              }
      
              .row > .col-4-medium {
                width: 33.3333333333%;
              }
      
              .row > .off-4-medium {
                margin-left: 33.3333333333%;
              }
      
              .row > .col-5-medium {
                width: 41.6666666667%;
              }
      
              .row > .off-5-medium {
                margin-left: 41.6666666667%;
              }
      
              .row > .col-6-medium {
                width: 50%;
              }
      
              .row > .off-6-medium {
                margin-left: 50%;
              }
      
              .row > .col-7-medium {
                width: 58.3333333333%;
              }
      
              .row > .off-7-medium {
                margin-left: 58.3333333333%;
              }
      
              .row > .col-8-medium {
                width: 66.6666666667%;
              }
      
              .row > .off-8-medium {
                margin-left: 66.6666666667%;
              }
      
              .row > .col-9-medium {
                width: 75%;
              }
      
              .row > .off-9-medium {
                margin-left: 75%;
              }
      
              .row > .col-10-medium {
                width: 83.3333333333%;
              }
      
              .row > .off-10-medium {
                margin-left: 83.3333333333%;
              }
      
              .row > .col-11-medium {
                width: 91.6666666667%;
              }
      
              .row > .off-11-medium {
                margin-left: 91.6666666667%;
              }
      
              .row > .col-12-medium {
                width: 100%;
              }
      
              .row > .off-12-medium {
                margin-left: 100%;
              }
      
              .row.gtr-0 {
                margin-top: 0;
                margin-left: 0em;
              }
      
                .row.gtr-0 > * {
                  padding: 0 0 0 0em;
                }
      
                .row.gtr-0.gtr-uniform {
                  margin-top: 0em;
                }
      
                  .row.gtr-0.gtr-uniform > * {
                    padding-top: 0em;
                  }
      
              .row.gtr-25 {
                margin-top: 0;
                margin-left: -0.375em;
              }
      
                .row.gtr-25 > * {
                  padding: 0 0 0 0.375em;
                }
      
                .row.gtr-25.gtr-uniform {
                  margin-top: -0.375em;
                }
      
                  .row.gtr-25.gtr-uniform > * {
                    padding-top: 0.375em;
                  }
      
              .row.gtr-50 {
                margin-top: 0;
                margin-left: -0.75em;
              }
      
                .row.gtr-50 > * {
                  padding: 0 0 0 0.75em;
                }
      
                .row.gtr-50.gtr-uniform {
                  margin-top: -0.75em;
                }
      
                  .row.gtr-50.gtr-uniform > * {
                    padding-top: 0.75em;
                  }
      
              .row {
                margin-top: 0;
                margin-left: -1.5em;
              }
      
                .row > * {
                  padding: 0 0 0 1.5em;
                }
      
                .row.gtr-uniform {
                  margin-top: -1.5em;
                }
      
                  .row.gtr-uniform > * {
                    padding-top: 1.5em;
                  }
      
              .row.gtr-150 {
                margin-top: 0;
                margin-left: -2.25em;
              }
      
                .row.gtr-150 > * {
                  padding: 0 0 0 2.25em;
                }
      
                .row.gtr-150.gtr-uniform {
                  margin-top: -2.25em;
                }
      
                  .row.gtr-150.gtr-uniform > * {
                    padding-top: 2.25em;
                  }
      
              .row.gtr-200 {
                margin-top: 0;
                margin-left: -3em;
              }
      
                .row.gtr-200 > * {
                  padding: 0 0 0 3em;
                }
      
                .row.gtr-200.gtr-uniform {
                  margin-top: -3em;
                }
      
                  .row.gtr-200.gtr-uniform > * {
                    padding-top: 3em;
                  }
      
          }
      
          @media screen and (max-width: 736px) {
      
            .row {
              display: flex;
              flex-wrap: wrap;
              box-sizing: border-box;
              align-items: stretch;
            }
      
              .row > * {
                box-sizing: border-box;
              }
      
              .row.gtr-uniform > * > :last-child {
                margin-bottom: 0;
              }
      
              .row.aln-left {
                justify-content: flex-start;
              }
      
              .row.aln-center {
                justify-content: center;
              }
      
              .row.aln-right {
                justify-content: flex-end;
              }
      
              .row.aln-top {
                align-items: flex-start;
              }
      
              .row.aln-middle {
                align-items: center;
              }
      
              .row.aln-bottom {
                align-items: flex-end;
              }
      
              .row > .imp-small {
                order: -1;
              }
      
              .row > .col-1-small {
                width: 8.3333333333%;
              }
      
              .row > .off-1-small {
                margin-left: 8.3333333333%;
              }
      
              .row > .col-2-small {
                width: 16.6666666667%;
              }
      
              .row > .off-2-small {
                margin-left: 16.6666666667%;
              }
      
              .row > .col-3-small {
                width: 25%;
              }
      
              .row > .off-3-small {
                margin-left: 25%;
              }
      
              .row > .col-4-small {
                width: 33.3333333333%;
              }
      
              .row > .off-4-small {
                margin-left: 33.3333333333%;
              }
      
              .row > .col-5-small {
                width: 41.6666666667%;
              }
      
              .row > .off-5-small {
                margin-left: 41.6666666667%;
              }
      
              .row > .col-6-small {
                width: 50%;
              }
      
              .row > .off-6-small {
                margin-left: 50%;
              }
      
              .row > .col-7-small {
                width: 58.3333333333%;
              }
      
              .row > .off-7-small {
                margin-left: 58.3333333333%;
              }
      
              .row > .col-8-small {
                width: 66.6666666667%;
              }
      
              .row > .off-8-small {
                margin-left: 66.6666666667%;
              }
      
              .row > .col-9-small {
                width: 75%;
              }
      
              .row > .off-9-small {
                margin-left: 75%;
              }
      
              .row > .col-10-small {
                width: 83.3333333333%;
              }
      
              .row > .off-10-small {
                margin-left: 83.3333333333%;
              }
      
              .row > .col-11-small {
                width: 91.6666666667%;
              }
      
              .row > .off-11-small {
                margin-left: 91.6666666667%;
              }
      
              .row > .col-12-small {
                width: 100%;
              }
      
              .row > .off-12-small {
                margin-left: 100%;
              }
      
              .row.gtr-0 {
                margin-top: 0;
                margin-left: 0em;
              }
      
                .row.gtr-0 > * {
                  padding: 0 0 0 0em;
                }
      
                .row.gtr-0.gtr-uniform {
                  margin-top: 0em;
                }
      
                  .row.gtr-0.gtr-uniform > * {
                    padding-top: 0em;
                  }
      
              .row.gtr-25 {
                margin-top: 0;
                margin-left: -0.375em;
              }
      
                .row.gtr-25 > * {
                  padding: 0 0 0 0.375em;
                }
      
                .row.gtr-25.gtr-uniform {
                  margin-top: -0.375em;
                }
      
                  .row.gtr-25.gtr-uniform > * {
                    padding-top: 0.375em;
                  }
      
              .row.gtr-50 {
                margin-top: 0;
                margin-left: -0.75em;
              }
      
                .row.gtr-50 > * {
                  padding: 0 0 0 0.75em;
                }
      
                .row.gtr-50.gtr-uniform {
                  margin-top: -0.75em;
                }
      
                  .row.gtr-50.gtr-uniform > * {
                    padding-top: 0.75em;
                  }
      
              .row {
                margin-top: 0;
                margin-left: -1.5em;
              }
      
                .row > * {
                  padding: 0 0 0 1.5em;
                }
      
                .row.gtr-uniform {
                  margin-top: -1.5em;
                }
      
                  .row.gtr-uniform > * {
                    padding-top: 1.5em;
                  }
      
              .row.gtr-150 {
                margin-top: 0;
                margin-left: -2.25em;
              }
      
                .row.gtr-150 > * {
                  padding: 0 0 0 2.25em;
                }
      
                .row.gtr-150.gtr-uniform {
                  margin-top: -2.25em;
                }
      
                  .row.gtr-150.gtr-uniform > * {
                    padding-top: 2.25em;
                  }
      
              .row.gtr-200 {
                margin-top: 0;
                margin-left: -3em;
              }
      
                .row.gtr-200 > * {
                  padding: 0 0 0 3em;
                }
      
                .row.gtr-200.gtr-uniform {
                  margin-top: -3em;
                }
      
                  .row.gtr-200.gtr-uniform > * {
                    padding-top: 3em;
                  }
      
          }
      
          @media screen and (max-width: 480px) {
      
            .row {
              display: flex;
              flex-wrap: wrap;
              box-sizing: border-box;
              align-items: stretch;
            }
      
              .row > * {
                box-sizing: border-box;
              }
      
              .row.gtr-uniform > * > :last-child {
                margin-bottom: 0;
              }
      
              .row.aln-left {
                justify-content: flex-start;
              }
      
              .row.aln-center {
                justify-content: center;
              }
      
              .row.aln-right {
                justify-content: flex-end;
              }
      
              .row.aln-top {
                align-items: flex-start;
              }
      
              .row.aln-middle {
                align-items: center;
              }
      
              .row.aln-bottom {
                align-items: flex-end;
              }
      
              .row > .imp-xsmall {
                order: -1;
              }
      
              .row > .col-1-xsmall {
                width: 8.3333333333%;
              }
      
              .row > .off-1-xsmall {
                margin-left: 8.3333333333%;
              }
      
              .row > .col-2-xsmall {
                width: 16.6666666667%;
              }
      
              .row > .off-2-xsmall {
                margin-left: 16.6666666667%;
              }
      
              .row > .col-3-xsmall {
                width: 25%;
              }
      
              .row > .off-3-xsmall {
                margin-left: 25%;
              }
      
              .row > .col-4-xsmall {
                width: 33.3333333333%;
              }
      
              .row > .off-4-xsmall {
                margin-left: 33.3333333333%;
              }
      
              .row > .col-5-xsmall {
                width: 41.6666666667%;
              }
      
              .row > .off-5-xsmall {
                margin-left: 41.6666666667%;
              }
      
              .row > .col-6-xsmall {
                width: 50%;
              }
      
              .row > .off-6-xsmall {
                margin-left: 50%;
              }
      
              .row > .col-7-xsmall {
                width: 58.3333333333%;
              }
      
              .row > .off-7-xsmall {
                margin-left: 58.3333333333%;
              }
      
              .row > .col-8-xsmall {
                width: 66.6666666667%;
              }
      
              .row > .off-8-xsmall {
                margin-left: 66.6666666667%;
              }
      
              .row > .col-9-xsmall {
                width: 75%;
              }
      
              .row > .off-9-xsmall {
                margin-left: 75%;
              }
      
              .row > .col-10-xsmall {
                width: 83.3333333333%;
              }
      
              .row > .off-10-xsmall {
                margin-left: 83.3333333333%;
              }
      
              .row > .col-11-xsmall {
                width: 91.6666666667%;
              }
      
              .row > .off-11-xsmall {
                margin-left: 91.6666666667%;
              }
      
              .row > .col-12-xsmall {
                width: 100%;
              }
      
              .row > .off-12-xsmall {
                margin-left: 100%;
              }
      
              .row.gtr-0 {
                margin-top: 0;
                margin-left: 0em;
              }
      
                .row.gtr-0 > * {
                  padding: 0 0 0 0em;
                }
      
                .row.gtr-0.gtr-uniform {
                  margin-top: 0em;
                }
      
                  .row.gtr-0.gtr-uniform > * {
                    padding-top: 0em;
                  }
      
              .row.gtr-25 {
                margin-top: 0;
                margin-left: -0.375em;
              }
      
                .row.gtr-25 > * {
                  padding: 0 0 0 0.375em;
                }
      
                .row.gtr-25.gtr-uniform {
                  margin-top: -0.375em;
                }
      
                  .row.gtr-25.gtr-uniform > * {
                    padding-top: 0.375em;
                  }
      
              .row.gtr-50 {
                margin-top: 0;
                margin-left: -0.75em;
              }
      
                .row.gtr-50 > * {
                  padding: 0 0 0 0.75em;
                }
      
                .row.gtr-50.gtr-uniform {
                  margin-top: -0.75em;
                }
      
                  .row.gtr-50.gtr-uniform > * {
                    padding-top: 0.75em;
                  }
      
              .row {
                margin-top: 0;
                margin-left: -1.5em;
              }
      
                .row > * {
                  padding: 0 0 0 1.5em;
                }
      
                .row.gtr-uniform {
                  margin-top: -1.5em;
                }
      
                  .row.gtr-uniform > * {
                    padding-top: 1.5em;
                  }
      
              .row.gtr-150 {
                margin-top: 0;
                margin-left: -2.25em;
              }
      
                .row.gtr-150 > * {
                  padding: 0 0 0 2.25em;
                }
      
                .row.gtr-150.gtr-uniform {
                  margin-top: -2.25em;
                }
      
                  .row.gtr-150.gtr-uniform > * {
                    padding-top: 2.25em;
                  }
      
              .row.gtr-200 {
                margin-top: 0;
                margin-left: -3em;
              }
      
                .row.gtr-200 > * {
                  padding: 0 0 0 3em;
                }
      
                .row.gtr-200.gtr-uniform {
                  margin-top: -3em;
                }
      
                  .row.gtr-200.gtr-uniform > * {
                    padding-top: 3em;
                  }
      
          }
      
      /* Box */
      
        .box {
          border-radius: 6px;
          border: solid 1px #e6e6e6;
          margin-bottom: 2em;
          padding: 1.5em;
        }
      
          .box > :last-child,
          .box > :last-child > :last-child,
          .box > :last-child > :last-child > :last-child {
            margin-bottom: 0;
          }
      
          .box.alt {
            border: 0;
            border-radius: 0;
            padding: 0;
          }
      
      /* Button */
      
        input[type="submit"],
        input[type="reset"],
        input[type="button"],
        button,
        .button {
          -moz-appearance: none;
          -webkit-appearance: none;
          -ms-appearance: none;
          appearance: none;
          -moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
          -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
          -ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
          transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
          border-radius: 6px;
          border: 0;
          cursor: pointer;
          display: inline-block;
          font-weight: bold;
          height: 2.85em;
          line-height: 2.95em;
          padding: 0 1.75em;
          text-align: center;
          text-decoration: none;
          white-space: nowrap;
        }
      
          input[type="submit"].icon,
          input[type="reset"].icon,
          input[type="button"].icon,
          button.icon,
          .button.icon {
            padding-left: 1.35em;
          }
      
            input[type="submit"].icon:before,
            input[type="reset"].icon:before,
            input[type="button"].icon:before,
            button.icon:before,
            .button.icon:before {
              margin-right: 0.5em;
            }
      
          input[type="submit"].fit,
          input[type="reset"].fit,
          input[type="button"].fit,
          button.fit,
          .button.fit {
            width: 100%;
          }
      
          input[type="submit"].small,
          input[type="reset"].small,
          input[type="button"].small,
          button.small,
          .button.small {
            font-size: 0.8em;
          }
      
          input[type="submit"].large,
          input[type="reset"].large,
          input[type="button"].large,
          button.large,
          .button.large {
            font-size: 1.35em;
          }
      
          input[type="submit"].disabled, input[type="submit"]:disabled,
          input[type="reset"].disabled,
          input[type="reset"]:disabled,
          input[type="button"].disabled,
          input[type="button"]:disabled,
          button.disabled,
          button:disabled,
          .button.disabled,
          .button:disabled {
            pointer-events: none;
            cursor: default;
            opacity: 0.25;
          }
      
          @media screen and (max-width: 480px) {
      
            input[type="submit"].icon,
            input[type="reset"].icon,
            input[type="button"].icon,
            button.icon,
            .button.icon {
              padding: 0;
            }
      
          }
      
      
        input[type="submit"],
        input[type="reset"],
        input[type="button"],
        button,
        .button {
          background-color: transparent;
        }
      
          input[type="submit"]:hover,
          input[type="reset"]:hover,
          input[type="button"]:hover,
          button:hover,
          .button:hover {
            background-color: rgba(144, 144, 144, 0.075);
          }
      
          input[type="submit"]:active,
          input[type="reset"]:active,
          input[type="button"]:active,
          button:active,
          .button:active {
            background-color: rgba(144, 144, 144, 0.15);
          }
      
          input[type="submit"].primary,
          input[type="reset"].primary,
          input[type="button"].primary,
          button.primary,
          .button.primary {
            box-shadow: none;
            background-color: #A8D0E6;
            color: #ffffff !important;
          }
      
            input[type="submit"].primary:hover,
            input[type="reset"].primary:hover,
            input[type="button"].primary:hover,
            button.primary:hover,
            .button.primary:hover {
              background-color: #5ca3e8;
            }
      
            input[type="submit"].primary:active,
            input[type="reset"].primary:active,
            input[type="button"].primary:active,
            button.primary:active,
            .button.primary:active {
              background-color: #3089e2;
            }
      
      /* Form */
      
        form {
          margin: 0 0 2em 0;
        }
      
        label {
          display: block;
          font-size: 0.9em;
          font-weight: bold;
          margin: 0 0 1em 0;
        }
      
        input[type="text"],
        input[type="password"],
        input[type="email"],
        select,
        textarea {
          -moz-appearance: none;
          -webkit-appearance: none;
          -ms-appearance: none;
          appearance: none;
          border-radius: 6px;
          border: none;
          border-style: solid;
          border-width: 1px;
          color: inherit;
          display: block;
          outline: 0;
          padding: 0 1em;
          text-decoration: none;
          width: 100%;
        }
      
          input[type="text"]:invalid,
          input[type="password"]:invalid,
          input[type="email"]:invalid,
          select:invalid,
          textarea:invalid {
            box-shadow: none;
          }
      
        select {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='%23e6e6e6' /%3E%3C/svg%3E");
          background-size: 1.25rem;
          background-repeat: no-repeat;
          background-position: calc(100% - 1rem) center;
          height: 2.75em;
          padding-right: 2.75em;
          text-overflow: ellipsis;
        }
      
          select option {
            color: #828282;
            background: #ffffff;
          }
      
          select:focus::-ms-value {
            background-color: transparent;
          }
      
          select::-ms-expand {
            display: none;
          }
      
        input[type="text"],
        input[type="password"],
        input[type="email"],
        select {
          height: 2.75em;
        }
      
        textarea {
          padding: 0.75em 1em;
        }
      
        input[type="checkbox"],
        input[type="radio"] {
          -moz-appearance: none;
          -webkit-appearance: none;
          -ms-appearance: none;
          appearance: none;
          display: block;
          float: left;
          margin-right: -2em;
          opacity: 0;
          width: 1em;
          z-index: -1;
        }
      
          input[type="checkbox"] + label,
          input[type="radio"] + label {
            text-decoration: none;
            cursor: pointer;
            display: inline-block;
            font-size: 1em;
            font-weight: normal;
            padding-left: 2.4em;
            padding-right: 0.75em;
            position: relative;
          }
      
            input[type="checkbox"] + label:before,
            input[type="radio"] + label:before {
              -moz-osx-font-smoothing: grayscale;
              -webkit-font-smoothing: antialiased;
              font-family: FontAwesome;
              font-style: normal;
              font-weight: normal;
              text-transform: none !important;
            }
      
            input[type="checkbox"] + label:before,
            input[type="radio"] + label:before {
              border-radius: 6px;
              border-style: solid;
              border-width: 1px;
              content: '';
              display: inline-block;
              height: 1.65em;
              left: 0;
              line-height: 1.58125em;
              position: absolute;
              text-align: center;
              top: 0;
              width: 1.65em;
            }
      
          input[type="checkbox"]:checked + label:before,
          input[type="radio"]:checked + label:before {
            content: '\f00c';
          }
      
        input[type="checkbox"] + label:before {
          border-radius: 6px;
        }
      
        input[type="radio"] + label:before {
          border-radius: 100%;
        }
      
        ::-webkit-input-placeholder {
          opacity: 1.0;
        }
      
        :-moz-placeholder {
          opacity: 1.0;
        }
      
        ::-moz-placeholder {
          opacity: 1.0;
        }
      
        :-ms-input-placeholder {
          opacity: 1.0;
        }
      
        .formerize-placeholder {
          opacity: 1.0;
        }
      
        label {
          color: #828282;
        }
      
        input[type="text"],
        input[type="password"],
        input[type="email"],
        select,
        textarea {
          color: inherit;
          background-color: rgba(144, 144, 144, 0.075);
          border-color: #e6e6e6;
        }
      
          input[type="text"]:focus,
          input[type="password"]:focus,
          input[type="email"]:focus,
          select:focus,
          textarea:focus {
            border-color: #A8D0E6;
            box-shadow: 0 0 0 1px #A8D0E6;
          }
      
        .select-wrapper:before {
          color: #e6e6e6;
        }
      
        input[type="checkbox"] + label,
        input[type="radio"] + label {
          color: #999999;
        }
      
          input[type="checkbox"] + label:before,
          input[type="radio"] + label:before {
            background-color: rgba(144, 144, 144, 0.075);
            border-color: #e6e6e6;
          }
      
        input[type="checkbox"]:checked + label:before,
        input[type="radio"]:checked + label:before {
          background-color: #A8D0E6;
          border-color: #A8D0E6;
          color: #ffffff;
        }
      
        input[type="checkbox"]:focus + label:before,
        input[type="radio"]:focus + label:before {
          border-color: #A8D0E6;
          box-shadow: 0 0 0 1px #A8D0E6;
        }
      
        ::-webkit-input-placeholder {
          color: #e0e0e0 !important;
        }
      
        :-moz-placeholder {
          color: #e0e0e0 !important;
        }
      
        ::-moz-placeholder {
          color: #e0e0e0 !important;
        }
      
        :-ms-input-placeholder {
          color: #e0e0e0 !important;
        }
      
        .formerize-placeholder {
          color: #e0e0e0 !important;
        }
      
      /* Icon */
      
        .icon {
          text-decoration: none;
          border-bottom: none;
          position: relative;
        }
      
          .icon:before {
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-family: FontAwesome;
            font-style: normal;
            font-weight: normal;
            text-transform: none !important;
          }
      
          .icon > .label {
            display: none;
          }
      
        .icon {
          color: #e0e0e0;
        }
      
      /* Image */
      
        .image {
          border-radius: 6px;
          border: 0;
          display: inline-block;
          position: relative;
          overflow: hidden;
        }
      
          .image img {
            border-radius: 6px;
            display: block;
          }
      
          .image.left, .image.right {
            max-width: 40%;
          }
      
            .image.left img, .image.right img {
              width: 100%;
            }
      
          .image.left {
            float: left;
            margin: 0 1.5em 1em 0;
            top: 0.25em;
          }
      
          .image.right {
            float: right;
            margin: 0 0 1em 1.5em;
            top: 0.25em;
          }
      
          .image.fit {
            display: block;
            margin: 0 0 2em 0;
            width: 100%;
          }
      
            .image.fit img {
              width: 100%;
            }
      
          .image.main {
            display: block;
            margin: 0 0 3em 0;
            width: 100%;
          }
      
            .image.main img {
              width: 100%;
            }
      
          .image.pozdrav {
            box-shadow: none;
            border-radius: 0;
            margin: 0 0 3em 0;
            width: 13em;
          }
      
            .image.pozdrav img {
              border-radius: 0;
              display: block;
              position: relative;
              width: 100%;
            }
      
            .image.pozdrav:before, .image.pozdrav:after {
              content: '';
            }
      
      
        .image {
          box-shadow: 0 0 0 4px #ffffff, 0 0 0 5px #e6e6e6;
        }
      
      
      /* List */
      
        ol {
          list-style: decimal;
          margin: 0 0 2em 0;
          padding-left: 1.25em;
        }
      
          ol li {
            padding-left: 0.25em;
          }
      
        ul {
          list-style: disc;
          margin: 0 0 2em 0;
          padding-left: 1em;
        }
      
          ul li {
            padding-left: 0.5em;
          }
      
          ul.alt {
            list-style: none;
            padding-left: 0;
          }
      
            ul.alt li {
              border-top-style: solid;
              border-top-width: 1px;
              padding: 0.5em 0;
            }
      
              ul.alt li:first-child {
                border-top: 0;
                padding-top: 0;
              }
      
        dl {
          margin: 0 0 2em 0;
        }
      
          dl dt {
            display: block;
            font-weight: bold;
            margin: 0 0 1em 0;
          }
      
          dl dd {
            margin-left: 2em;
          }
      
        ul.alt > li {
          border-top-color: #e6e6e6;
        }
      
      /* Actions */
      
        ul.actions {
          display: -moz-flex;
          display: -webkit-flex;
          display: -ms-flex;
          display: flex;
          cursor: default;
          list-style: none;
          margin-left: -1em;
          padding-left: 0;
        }
      
          ul.actions li {
            padding: 0 0 0 1em;
            vertical-align: middle;
          }
      
          ul.actions.special {
            -moz-justify-content: center;
            -webkit-justify-content: center;
            -ms-justify-content: center;
            justify-content: center;
            width: 100%;
            margin-left: 0;
          }
      
            ul.actions.special li:first-child {
              padding-left: 0;
            }
      
          ul.actions.stacked {
            -moz-flex-direction: column;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            margin-left: 0;
          }
      
            ul.actions.stacked li {
              padding: 1.3em 0 0 0;
            }
      
              ul.actions.stacked li:first-child {
                padding-top: 0;
              }
      
          ul.actions.fit {
            width: calc(100% + 1em);
          }
      
            ul.actions.fit li {
              -moz-flex-grow: 1;
              -webkit-flex-grow: 1;
              -ms-flex-grow: 1;
              flex-grow: 1;
              -moz-flex-shrink: 1;
              -webkit-flex-shrink: 1;
              -ms-flex-shrink: 1;
              flex-shrink: 1;
              width: 100%;
            }
      
              ul.actions.fit li > * {
                width: 100%;
              }
      
            ul.actions.fit.stacked {
              width: 100%;
            }
      
          @media screen and (max-width: 480px) {
      
            ul.actions:not(.fixed) {
              -moz-flex-direction: column;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              margin-left: 0;
              width: 100% !important;
            }
      
              ul.actions:not(.fixed) li {
                -moz-flex-grow: 1;
                -webkit-flex-grow: 1;
                -ms-flex-grow: 1;
                flex-grow: 1;
                -moz-flex-shrink: 1;
                -webkit-flex-shrink: 1;
                -ms-flex-shrink: 1;
                flex-shrink: 1;
                padding: 1em 0 0 0;
                text-align: center;
                width: 100%;
              }
      
                ul.actions:not(.fixed) li > * {
                  width: 100%;
                }
      
                ul.actions:not(.fixed) li:first-child {
                  padding-top: 0;
                }
      
                ul.actions:not(.fixed) li input[type="submit"],
                ul.actions:not(.fixed) li input[type="reset"],
                ul.actions:not(.fixed) li input[type="button"],
                ul.actions:not(.fixed) li button,
                ul.actions:not(.fixed) li .button {
                  width: 100%;
                }
      
                  ul.actions:not(.fixed) li input[type="submit"].icon:before,
                  ul.actions:not(.fixed) li input[type="reset"].icon:before,
                  ul.actions:not(.fixed) li input[type="button"].icon:before,
                  ul.actions:not(.fixed) li button.icon:before,
                  ul.actions:not(.fixed) li .button.icon:before {
                    margin-left: -0.5em;
                  }
      
          }
      
      /* Icons */
      
        ul.icons {
          cursor: default;
          list-style: none;
          padding-left: 0;
        }
      
          ul.icons li {
            display: inline-block;
            padding: 0 1.5em 0 0;
          }
      
            ul.icons li:last-child {
              padding-right: 0 !important;
            }
      
            ul.icons li .icon:before {
              font-size: 1.75rem;
            }
      
          ul.icons.major li {
            padding: 0 2.5em 0 0;
          }
      
            ul.icons.major li .icon:before {
              font-size: 2.75rem;
            }
      
          @media screen and (max-width: 736px) {
      
            ul.icons.major li {
              padding: 0 1.25em 0 0;
            }
      
              ul.icons.major li .icon:before {
                font-size: 1.75rem;
              }
      
          }
      
          ul.icons.labeled li {
            margin: 1em 0;
            padding: 0 2em 0 0;
          }
      
            ul.icons.labeled li .icon:before {
              vertical-align: middle;
              font-size: 2.25rem;
              margin-right: 0.5em;
            }
      
            ul.icons.labeled li .icon .label {
              display: inline-block;
              vertical-align: middle;
              color: #999999;
            }
      
        @media screen and (max-width: 736px) and (orientation: portrait) {
      
          ul.icons.labeled {
            text-align: left;
            margin-right: auto;
            margin-left: auto;
            display: inline-block;
            white-space: nowrap;
          }
      
            ul.icons.labeled li {
              display: block;
              padding: 0;
              margin: 1.5em 0 0 0;
            }
      
              ul.icons.labeled li .icon:before {
                width: 1.5em;
                display: block;
                float: left;
                margin-right: 0;
              }
      
              ul.icons.labeled li .icon:after {
                content: '';
                display: block;
                clear: both;
              }
      
              ul.icons.labeled li:first-child {
                margin-top: 0;
              }
      
        }
      
      /* Section/Article */
      
        section.special, article.special {
          text-align: center;
        }
      
        header p {
          position: relative;
          margin: 0 0 1.5em 0;
        }
      
          @media screen and (max-width: 736px) {
      
            header p br {
              display: none;
            }
      
          }
      
        header h2 + p {
          font-size: 1.25em;
          margin-top: -0.5em;
          line-height: 1.5em;
        }
      
        header h3 + p {
          font-size: 1.1em;
          margin-top: -0.25em;
          line-height: 1.5em;
        }
      
        header h4 + p,
        header h5 + p,
        header h6 + p {
          font-size: 0.9em;
          margin-top: -0.6em;
          line-height: 1.5em;
        }
      
        header.major {
          margin: 0 0 2.5em 0;
          text-align: center;
        }
      
          header.major:after {
            content: '';
            border-bottom: solid 2px #e6e6e6;
            display: block;
            width: 4em;
            margin: 2em auto 0 auto;
          }
      
          @media screen and (max-width: 736px) {
      
            header.major {
              margin: 0 0 2em 0;
            }
      
              header.major p {
                font-size: 1em;
              }
      
          }
      
      /* Spotlight */
      
        .spotlight {
          display: -moz-flex;
          display: -webkit-flex;
          display: -ms-flex;
          display: flex;
          -moz-align-items: center;
          -webkit-align-items: center;
          -ms-align-items: center;
          align-items: center;
          margin: auto;
          width: 90%;
        }
      
          .spotlight .image {
            width: 30%;
            border-radius: 100%;
            margin: 0 3em 0 0;
            display: block;
          }
      
            .spotlight .image img {
              display: block;
              border-radius: 100%;
              width: 100%;
            }
      
          .spotlight .content {
            width: 70%;
          }
      
            .spotlight .content > :last-child {
              margin-bottom: 0;
            }
      
          .spotlight:nth-child(2n) {
            -moz-flex-direction: row-reverse;
            -webkit-flex-direction: row-reverse;
            -ms-flex-direction: row-reverse;
            flex-direction: row-reverse;
          }
      
            .spotlight:nth-child(2n) .image {
              margin: 0 0 0 3em;
            }
      
            .spotlight:nth-child(2n) .content {
              text-align: right;
            }
      
        @media screen and (max-width: 736px) and (orientation: landscape) {
      
          .spotlight .image {
            margin: 0 2em 0 0;
          }
      
          .spotlight:nth-child(2n) .image {
            margin: 0 0 0 2em;
          }
      
        }
      
        @media screen and (max-width: 736px) and (orientation: portrait) {
      
          .spotlight {
            -moz-flex-direction: column !important;
            -webkit-flex-direction: column !important;
            -ms-flex-direction: column !important;
            flex-direction: column !important;
          }
      
            .spotlight .image {
              width: 100%;
              max-width: 60%;
              margin: 0 0 2em 0 !important;
            }
      
            .spotlight .content {
              width: 100%;
              text-align: center !important;
            }
      
        }
      
      /* Table */
      
        .table-wrapper {
          -webkit-overflow-scrolling: touch;
          overflow-x: auto;
        }
      
        table {
          margin: 0 0 2em 0;
          width: 100%;
        }
      
          table tbody tr {
            border-style: solid;
            border-width: 1px;
            border-left: 0;
            border-right: 0;
          }
      
          table td {
            padding: 0.75em 0.75em;
          }
      
          table th {
            font-size: 0.9em;
            font-weight: bold;
            padding: 0 0.75em 0.75em 0.75em;
            text-align: left;
          }
      
          table thead {
            border-bottom-style: solid;
            border-bottom-width: 2px;
          }
      
          table tfoot {
            border-top-style: solid;
            border-top-width: 2px;
          }
      
          table.alt {
            border-collapse: separate;
          }
      
            table.alt tbody tr td {
              border-style: solid;
              border-width: 1px;
              border-left-width: 0;
              border-top-width: 0;
            }
      
              table.alt tbody tr td:first-child {
                border-left-width: 1px;
              }
      
            table.alt tbody tr:first-child td {
              border-top-width: 1px;
            }
      
            table.alt thead {
              border-bottom: 0;
            }
      
            table.alt tfoot {
              border-top: 0;
            }
      
        table tbody tr {
          border-color: #e6e6e6;
        }
      
          table tbody tr:nth-child(2n + 1) {
            background-color: rgba(144, 144, 144, 0.075);
          }
      
        table th {
          color: #828282;
        }
      
        table thead {
          border-bottom-color: #e6e6e6;
        }
      
        table tfoot {
          border-top-color: #e6e6e6;
        }
      
        table.alt tbody tr td {
          border-color: #e6e6e6;
        }
      
      /* Wrapper */
      
        .wrapper {
          padding: 4.5em 0 2.5em 0 ;
          background-color: #ffffff;
          border-bottom: solid 2px #eeeeee;
        }
      
          .wrapper > .inner {
            margin-left: auto;
            margin-right: auto;
            width: 50em;
          }
      
            .wrapper > .inner.alt > * {
              border-top: solid 2px #eeeeee;
              margin-bottom: 0;
              margin-top: 3em;
              padding-top: 3em;
            }
      
              .wrapper > .inner.alt > *:first-child {
                border-top: 0;
                margin-top: 0;
                padding-top: 0;
              }
      
          .wrapper.style1 {
            background-color: #A8D0E6;
            color: #d1e5f9;
          }
      
            .wrapper.style1 input[type="submit"],
            .wrapper.style1 input[type="reset"],
            .wrapper.style1 input[type="button"],
            .wrapper.style1 button,
            .wrapper.style1 .button {
              background-color: transparent;
              color: #ffffff !important;
              box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.25);
            }
      
              .wrapper.style1 input[type="submit"]:hover,
              .wrapper.style1 input[type="reset"]:hover,
              .wrapper.style1 input[type="button"]:hover,
              .wrapper.style1 button:hover,
              .wrapper.style1 .button:hover {
                background-color: rgba(255, 255, 255, 0.075);
              }
      
              .wrapper.style1 input[type="submit"]:active,
              .wrapper.style1 input[type="reset"]:active,
              .wrapper.style1 input[type="button"]:active,
              .wrapper.style1 button:active,
              .wrapper.style1 .button:active {
                background-color: rgba(255, 255, 255, 0.2);
              }
      
              .wrapper.style1 input[type="submit"].primary,
              .wrapper.style1 input[type="reset"].primary,
              .wrapper.style1 input[type="button"].primary,
              .wrapper.style1 button.primary,
              .wrapper.style1 .button.primary {
                box-shadow: none;
                background-color: #ffffff;
                color: #A8D0E6 !important;
              }
      
            .wrapper.style1 label {
              color: #ffffff;
            }
      
            .wrapper.style1 input[type="text"],
            .wrapper.style1 input[type="password"],
            .wrapper.style1 input[type="email"],
            .wrapper.style1 select,
            .wrapper.style1 textarea {
              color: inherit;
              background-color: rgba(255, 255, 255, 0.075);
              border-color: rgba(255, 255, 255, 0.25);
            }
      
              .wrapper.style1 input[type="text"]:focus,
              .wrapper.style1 input[type="password"]:focus,
              .wrapper.style1 input[type="email"]:focus,
              .wrapper.style1 select:focus,
              .wrapper.style1 textarea:focus {
                border-color: #ffffff;
                box-shadow: 0 0 0 1px #ffffff;
              }
      
            .wrapper.style1 .select-wrapper:before {
              color: rgba(255, 255, 255, 0.25);
            }
      
            .wrapper.style1 input[type="checkbox"] + label,
            .wrapper.style1 input[type="radio"] + label {
              color: #d1e5f9;
            }
      
              .wrapper.style1 input[type="checkbox"] + label:before,
              .wrapper.style1 input[type="radio"] + label:before {
                background-color: rgba(255, 255, 255, 0.075);
                border-color: rgba(255, 255, 255, 0.25);
              }
      
            .wrapper.style1 input[type="checkbox"]:checked + label:before,
            .wrapper.style1 input[type="radio"]:checked + label:before {
              background-color: #ffffff;
              border-color: #ffffff;
              color: #A8D0E6;
            }
      
            .wrapper.style1 input[type="checkbox"]:focus + label:before,
            .wrapper.style1 input[type="radio"]:focus + label:before {
              border-color: #ffffff;
              box-shadow: 0 0 0 1px #ffffff;
            }
      
            .wrapper.style1 ::-webkit-input-placeholder {
              color: #b5d5f5 !important;
            }
      
            .wrapper.style1 :-moz-placeholder {
              color: #b5d5f5 !important;
            }
      
            .wrapper.style1 ::-moz-placeholder {
              color: #b5d5f5 !important;
            }
      
            .wrapper.style1 :-ms-input-placeholder {
              color: #b5d5f5 !important;
            }
      
            .wrapper.style1 .formerize-placeholder {
              color: #b5d5f5 !important;
            }
      
            .wrapper.style1 .icon {
              color: #b5d5f5;
            }
      
            .wrapper.style1 .image {
              box-shadow: 0 0 0 4px #A8D0E6, 0 0 0 5px rgba(255, 255, 255, 0.25);
            }
      
              .wrapper.style1 .image.phone {
                box-shadow: none;
              }
      
                .wrapper.style1 .image.phone .inner, .wrapper.style1 .image.phone:before, .wrapper.style1 .image.phone:after {
                  border-color: rgba(255, 255, 255, 0.25);
                }
      
                .wrapper.style1 .image.phone .inner:before {
                  background: rgba(255, 255, 255, 0.25);
                }
      
                .wrapper.style1 .image.phone .inner:after {
                  border-color: rgba(255, 255, 255, 0.25);
                }
      
            .wrapper.style1 ul.alt > li {
              border-top-color: rgba(255, 255, 255, 0.25);
            }
      
            .wrapper.style1 table tbody tr {
              border-color: rgba(255, 255, 255, 0.25);
            }
      
              .wrapper.style1 table tbody tr:nth-child(2n + 1) {
                background-color: rgba(255, 255, 255, 0.075);
              }
      
            .wrapper.style1 table th {
              color: #ffffff;
            }
      
            .wrapper.style1 table thead {
              border-bottom-color: rgba(255, 255, 255, 0.25);
            }
      
            .wrapper.style1 table tfoot {
              border-top-color: rgba(255, 255, 255, 0.25);
            }
      
            .wrapper.style1 table.alt tbody tr td {
              border-color: rgba(255, 255, 255, 0.25);
            }
      
            .wrapper.style1 input, .wrapper.style1 select, .wrapper.style1 textarea {
              color: #d1e5f9;
            }
      
            .wrapper.style1 a {
              color: inherit;
              border-bottom-color: rgba(255, 255, 255, 0.5);
              color: #ffffff;
            }
      
            .wrapper.style1 strong, .wrapper.style1 b {
              color: #ffffff;
            }
      
            .wrapper.style1 h1, .wrapper.style1 h2, .wrapper.style1 h3, .wrapper.style1 h4, .wrapper.style1 h5, .wrapper.style1 h6 {
              color: #ffffff;
            }
      
            .wrapper.style1 blockquote {
              border-left-color: rgba(255, 255, 255, 0.25);
            }
      
            .wrapper.style1 code {
              background: rgba(255, 255, 255, 0.075);
              border-color: rgba(255, 255, 255, 0.25);
            }
      
            .wrapper.style1 hr {
              border-bottom-color: rgba(255, 255, 255, 0.25);
            }
      
          .wrapper.style2 {
            background-color: #fbfbfb;
            color: #999999;
          }
      
            .wrapper.style2 input[type="submit"],
            .wrapper.style2 input[type="reset"],
            .wrapper.style2 input[type="button"],
            .wrapper.style2 button,
            .wrapper.style2 .button {
              background-color: transparent;
              color: #828282 !important;
              box-shadow: inset 0 0 0 2px #e6e6e6;
            }
      
              .wrapper.style2 input[type="submit"]:hover,
              .wrapper.style2 input[type="reset"]:hover,
              .wrapper.style2 input[type="button"]:hover,
              .wrapper.style2 button:hover,
              .wrapper.style2 .button:hover {
                background-color: rgba(144, 144, 144, 0.075);
              }
      
              .wrapper.style2 input[type="submit"]:active,
              .wrapper.style2 input[type="reset"]:active,
              .wrapper.style2 input[type="button"]:active,
              .wrapper.style2 button:active,
              .wrapper.style2 .button:active {
                background-color: rgba(144, 144, 144, 0.15);
              }
      
              .wrapper.style2 input[type="submit"].primary,
              .wrapper.style2 input[type="reset"].primary,
              .wrapper.style2 input[type="button"].primary,
              .wrapper.style2 button.primary,
              .wrapper.style2 .button.primary {
                box-shadow: none;
                background-color: #A8D0E6;
                color: #ffffff !important;
              }
      
                .wrapper.style2 input[type="submit"].primary:hover,
                .wrapper.style2 input[type="reset"].primary:hover,
                .wrapper.style2 input[type="button"].primary:hover,
                .wrapper.style2 button.primary:hover,
                .wrapper.style2 .button.primary:hover {
                  background-color: #5ca3e8;
                }
      
                .wrapper.style2 input[type="submit"].primary:active,
                .wrapper.style2 input[type="reset"].primary:active,
                .wrapper.style2 input[type="button"].primary:active,
                .wrapper.style2 button.primary:active,
                .wrapper.style2 .button.primary:active {
                  background-color: #3089e2;
                }
      
            .wrapper.style2 label {
              color: #828282;
            }
      
            .wrapper.style2 input[type="text"],
            .wrapper.style2 input[type="password"],
            .wrapper.style2 input[type="email"],
            .wrapper.style2 select,
            .wrapper.style2 textarea {
              color: inherit;
              background-color: rgba(144, 144, 144, 0.075);
              border-color: #e6e6e6;
            }
      
              .wrapper.style2 input[type="text"]:focus,
              .wrapper.style2 input[type="password"]:focus,
              .wrapper.style2 input[type="email"]:focus,
              .wrapper.style2 select:focus,
              .wrapper.style2 textarea:focus {
                border-color: #A8D0E6;
                box-shadow: 0 0 0 1px #A8D0E6;
              }
      
            .wrapper.style2 .select-wrapper:before {
              color: #e6e6e6;
            }
      
            .wrapper.style2 input[type="checkbox"] + label,
            .wrapper.style2 input[type="radio"] + label {
              color: #999999;
            }
      
              .wrapper.style2 input[type="checkbox"] + label:before,
              .wrapper.style2 input[type="radio"] + label:before {
                background-color: rgba(144, 144, 144, 0.075);
                border-color: #e6e6e6;
              }
      
            .wrapper.style2 input[type="checkbox"]:checked + label:before,
            .wrapper.style2 input[type="radio"]:checked + label:before {
              background-color: #A8D0E6;
              border-color: #A8D0E6;
              color: #ffffff;
            }
      
            .wrapper.style2 input[type="checkbox"]:focus + label:before,
            .wrapper.style2 input[type="radio"]:focus + label:before {
              border-color: #A8D0E6;
              box-shadow: 0 0 0 1px #A8D0E6;
            }
      
            .wrapper.style2 ::-webkit-input-placeholder {
              color: #e0e0e0 !important;
            }
      
            .wrapper.style2 :-moz-placeholder {
              color: #e0e0e0 !important;
            }
      
            .wrapper.style2 ::-moz-placeholder {
              color: #e0e0e0 !important;
            }
      
            .wrapper.style2 :-ms-input-placeholder {
              color: #e0e0e0 !important;
            }
      
            .wrapper.style2 .formerize-placeholder {
              color: #e0e0e0 !important;
            }
      
            .wrapper.style2 .icon {
              color: #e0e0e0;
            }
      
            .wrapper.style2 .image {
              box-shadow: 0 0 0 4px #fbfbfb, 0 0 0 5px #e6e6e6;
            }
      
              .wrapper.style2 .image.phone {
                box-shadow: none;
              }
      
                .wrapper.style2 .image.phone .inner, .wrapper.style2 .image.phone:before, .wrapper.style2 .image.phone:after {
                  border-color: #e6e6e6;
                }
      
                .wrapper.style2 .image.phone .inner:before {
                  background: #e6e6e6;
                }
      
                .wrapper.style2 .image.phone .inner:after {
                  border-color: #e6e6e6;
                }
      
            .wrapper.style2 ul.alt > li {
              border-top-color: #e6e6e6;
            }
      
            .wrapper.style2 table tbody tr {
              border-color: #e6e6e6;
            }
      
              .wrapper.style2 table tbody tr:nth-child(2n + 1) {
                background-color: rgba(144, 144, 144, 0.075);
              }
      
            .wrapper.style2 table th {
              color: #828282;
            }
      
            .wrapper.style2 table thead {
              border-bottom-color: #e6e6e6;
            }
      
            .wrapper.style2 table tfoot {
              border-top-color: #e6e6e6;
            }
      
            .wrapper.style2 table.alt tbody tr td {
              border-color: #e6e6e6;
            }
      
            .wrapper.style2 input, .wrapper.style2 select, .wrapper.style2 textarea {
              color: #999999;
            }
      
            .wrapper.style2 a {
              color: inherit;
              border-bottom-color: #d6d6d6;
            }
      
              .wrapper.style2 a:hover {
                color: #A8D0E6;
              }
      
            .wrapper.style2 strong, .wrapper.style2 b {
              color: #828282;
            }
      
            .wrapper.style2 h1, .wrapper.style2 h2, .wrapper.style2 h3, .wrapper.style2 h4, .wrapper.style2 h5, .wrapper.style2 h6 {
              color: #828282;
            }
      
            .wrapper.style2 blockquote {
              border-left-color: #e6e6e6;
            }
      
            .wrapper.style2 code {
              background: rgba(144, 144, 144, 0.075);
              border-color: #e6e6e6;
            }
      
            .wrapper.style2 hr {
              border-bottom-color: #e6e6e6;
            }
      
          .wrapper.style3 {
            background-color: #f7f7f7;
            color: #999999;
          }
      
            .wrapper.style3 input[type="submit"],
            .wrapper.style3 input[type="reset"],
            .wrapper.style3 input[type="button"],
            .wrapper.style3 button,
            .wrapper.style3 .button {
              background-color: transparent;
              color: #828282 !important;
              box-shadow: inset 0 0 0 2px #d6d6d6;
            }
      
              .wrapper.style3 input[type="submit"]:hover,
              .wrapper.style3 input[type="reset"]:hover,
              .wrapper.style3 input[type="button"]:hover,
              .wrapper.style3 button:hover,
              .wrapper.style3 .button:hover {
                background-color: rgba(144, 144, 144, 0.075);
              }
      
              .wrapper.style3 input[type="submit"]:active,
              .wrapper.style3 input[type="reset"]:active,
              .wrapper.style3 input[type="button"]:active,
              .wrapper.style3 button:active,
              .wrapper.style3 .button:active {
                background-color: rgba(144, 144, 144, 0.15);
              }
      
              .wrapper.style3 input[type="submit"].primary,
              .wrapper.style3 input[type="reset"].primary,
              .wrapper.style3 input[type="button"].primary,
              .wrapper.style3 button.primary,
              .wrapper.style3 .button.primary {
                box-shadow: none;
                background-color: #A8D0E6;
                color: #ffffff !important;
              }
      
                .wrapper.style3 input[type="submit"].primary:hover,
                .wrapper.style3 input[type="reset"].primary:hover,
                .wrapper.style3 input[type="button"].primary:hover,
                .wrapper.style3 button.primary:hover,
                .wrapper.style3 .button.primary:hover {
                  background-color: #5ca3e8;
                }
      
                .wrapper.style3 input[type="submit"].primary:active,
                .wrapper.style3 input[type="reset"].primary:active,
                .wrapper.style3 input[type="button"].primary:active,
                .wrapper.style3 button.primary:active,
                .wrapper.style3 .button.primary:active {
                  background-color: #3089e2;
                }
      
            .wrapper.style3 label {
              color: #828282;
            }
      
            .wrapper.style3 input[type="text"],
            .wrapper.style3 input[type="password"],
            .wrapper.style3 input[type="email"],
            .wrapper.style3 select,
            .wrapper.style3 textarea {
              color: inherit;
              background-color: rgba(144, 144, 144, 0.075);
              border-color: #d6d6d6;
            }
      
              .wrapper.style3 input[type="text"]:focus,
              .wrapper.style3 input[type="password"]:focus,
              .wrapper.style3 input[type="email"]:focus,
              .wrapper.style3 select:focus,
              .wrapper.style3 textarea:focus {
                border-color: #A8D0E6;
                box-shadow: 0 0 0 1px #A8D0E6;
              }
      
            .wrapper.style3 .select-wrapper:before {
              color: #d6d6d6;
            }
      
            .wrapper.style3 input[type="checkbox"] + label,
            .wrapper.style3 input[type="radio"] + label {
              color: #999999;
            }
      
              .wrapper.style3 input[type="checkbox"] + label:before,
              .wrapper.style3 input[type="radio"] + label:before {
                background-color: rgba(144, 144, 144, 0.075);
                border-color: #d6d6d6;
              }
      
            .wrapper.style3 input[type="checkbox"]:checked + label:before,
            .wrapper.style3 input[type="radio"]:checked + label:before {
              background-color: #A8D0E6;
              border-color: #A8D0E6;
              color: #ffffff;
            }
      
            .wrapper.style3 input[type="checkbox"]:focus + label:before,
            .wrapper.style3 input[type="radio"]:focus + label:before {
              border-color: #A8D0E6;
              box-shadow: 0 0 0 1px #A8D0E6;
            }
      
            .wrapper.style3 ::-webkit-input-placeholder {
              color: #b0b0b0 !important;
            }
      
            .wrapper.style3 :-moz-placeholder {
              color: #b0b0b0 !important;
            }
      
            .wrapper.style3 ::-moz-placeholder {
              color: #b0b0b0 !important;
            }
      
            .wrapper.style3 :-ms-input-placeholder {
              color: #b0b0b0 !important;
            }
      
            .wrapper.style3 .formerize-placeholder {
              color: #b0b0b0 !important;
            }
      
            .wrapper.style3 .icon {
              color: #b0b0b0;
            }
      
            .wrapper.style3 .image {
              box-shadow: 0 0 0 4px #f7f7f7, 0 0 0 5px #d6d6d6;
            }
      
              .wrapper.style3 .image.phone {
                box-shadow: none;
              }
      
                .wrapper.style3 .image.phone .inner, .wrapper.style3 .image.phone:before, .wrapper.style3 .image.phone:after {
                  border-color: #d6d6d6;
                }
      
                .wrapper.style3 .image.phone .inner:before {
                  background: #d6d6d6;
                }
      
                .wrapper.style3 .image.phone .inner:after {
                  border-color: #d6d6d6;
                }
      
            .wrapper.style3 ul.alt > li {
              border-top-color: #d6d6d6;
            }
      
            .wrapper.style3 table tbody tr {
              border-color: #d6d6d6;
            }
      
              .wrapper.style3 table tbody tr:nth-child(2n + 1) {
                background-color: rgba(144, 144, 144, 0.075);
              }
      
            .wrapper.style3 table th {
              color: #828282;
            }
      
            .wrapper.style3 table thead {
              border-bottom-color: #d6d6d6;
            }
      
            .wrapper.style3 table tfoot {
              border-top-color: #d6d6d6;
            }
      
            .wrapper.style3 table.alt tbody tr td {
              border-color: #d6d6d6;
            }
      
            .wrapper.style3 input, .wrapper.style3 select, .wrapper.style3 textarea {
              color: #999999;
            }
      
            .wrapper.style3 a {
              color: inherit;
              border-bottom-color: #c6c6c6;
            }
      
              .wrapper.style3 a:hover {
                color: #A8D0E6;
              }
      
            .wrapper.style3 strong, .wrapper.style3 b {
              color: #828282;
            }
      
            .wrapper.style3 h1, .wrapper.style3 h2, .wrapper.style3 h3, .wrapper.style3 h4, .wrapper.style3 h5, .wrapper.style3 h6 {
              color: #828282;
            }
      
            .wrapper.style3 blockquote {
              border-left-color: #d6d6d6;
            }
      
            .wrapper.style3 code {
              background: rgba(144, 144, 144, 0.075);
              border-color: #d6d6d6;
            }
      
            .wrapper.style3 hr {
              border-bottom-color: #d6d6d6;
            }
      
          @media screen and (max-width: 980px) {
      
            .wrapper {
              padding: 4em 4em 2em 4em ;
            }
      
              .wrapper > .inner {
                width: 100%;
              }
      
          }
      
        @media screen and (max-width: 736px) and (orientation: landscape) {
      
          .wrapper {
            padding: 3em 3em 1em 3em ;
          }
      
        }
      
        @media screen and (max-width: 736px) and (orientation: portrait) {
      
          .wrapper {
            padding: 3em 1.5em 1em 1.5em ;
          }
      
        }
      
        @media screen and (max-width: 480px) and (orientation: landscape) {
      
          .wrapper {
            padding: 2em 1.5em 0.1em 1.5em ;
          }
      
        }
      
        @media screen and (max-width: 480px) and (orientation: portrait) {
      
          .wrapper {
            padding: 2em 1em 0.1em 1em ;
          }
      
        }
      
      /* Header */
      
        #header {
          color: #FFFFFF;
          padding: 4.5em 0 2.5em 0 ;
          -moz-align-items: center;
          -webkit-align-items: center;
          -ms-align-items: center;
          align-items: center;
          display: -moz-flex;
          display: -webkit-flex;
          display: -ms-flex;
          display: flex;
          -moz-justify-content: center;
          -webkit-justify-content: center;
          -ms-justify-content: center;
          justify-content: center;
          background-position: top left, center center;
          background-attachment: fixed, fixed;
          background-size: auto, cover;
          height: 100vh;
          min-height: 35em;
        }
      
          #header label {
            color: #ffffff;
          }
      
      
          #header .select-wrapper:before {
            color: rgba(255, 255, 255, 0.25);
          }
      
         
      
          #header .image {
            box-shadow: 0 0 0 4px #A8D0E6, 0 0 0 5px rgba(255, 255, 255, 0.25);
          }
      
      
          #header ul.alt > li {
            border-top-color: rgba(255, 255, 255, 0.25);
          }
      
          #header a {
            color: inherit;
            border-bottom-color: rgba(255, 255, 255, 0.5);
            color: #ffffff;
          }
      
          #header strong, #header b {
            color: #ffffff;
          }
      
          #header h1, #header h2, #header h3, #header h4, #header h5, #header h6 {
            color: #ffffff;
          }
      
          #header blockquote {
            border-left-color: rgba(255, 255, 255, 0.25);
          }
      
          #header code {
            background: rgba(255, 255, 255, 0.075);
            border-color: rgba(255, 255, 255, 0.25);
          }
      
          #header hr {
            border-bottom-color: rgba(255, 255, 255, 0.25);
          }
      
          #header h1 {
            font-size: 3.25em;
            font-weight: bold;
            margin-bottom: 0em;
          }

          #header h2 {
            font-size: 1.25em;
            font-weight: 100;
            text-transform:uppercase;
            margin-bottom: 2em;
          }

          #header p {
            font-size: 1.5em;
            line-height: 1.35em;
          }
      
            #header p br {
              display: inline;
            }
      
          #header .content {
            -moz-transition: opacity 0.5s ease, -moz-transform 1s ease;
            -webkit-transition: opacity 0.5s ease, -webkit-transform 1s ease;
            -ms-transition: opacity 0.5s ease, -ms-transform 1s ease;
            transition: opacity 0.5s ease, transform 1s ease;
            -moz-transform: translateX(0);
            -webkit-transform: translateX(0);
            -ms-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
            text-align: right;
            margin: -3.5em 4em 0 0;
          }
      
            #header .content > :last-child {
              margin-bottom: 0;
            }
      
            #header .content .actions {
              -moz-justify-content: -moz-flex-end;
              -webkit-justify-content: -webkit-flex-end;
              -ms-justify-content: -ms-flex-end;
              justify-content: flex-end;
            }
      
          #header .image {
            -moz-transition: opacity 1s ease, -moz-transform 1s ease;
            -webkit-transition: opacity 1s ease, -webkit-transform 1s ease;
            -ms-transition: opacity 1s ease, -ms-transform 1s ease;
            transition: opacity 1s ease, transform 1s ease;
            -moz-transform: translateY(0);
            -webkit-transform: translateY(0);
            -ms-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
          }
      
            #header .image img {
              -moz-transition: opacity 0.75s ease;
              -webkit-transition: opacity 0.75s ease;
              -ms-transition: opacity 0.75s ease;
              transition: opacity 0.75s ease;
              -moz-transition-delay: 0.75s;
              -webkit-transition-delay: 0.75s;
              -ms-transition-delay: 0.75s;
              transition-delay: 0.75s;
              opacity: 1;
            }
      
         
      
          @media screen and (max-width: 980px) {
      
            #header {
              height: auto;
              min-height: 0;
            }
      
              #header .content {
                margin: -2em 4em 0 0;
              }
      
                #header .content .actions {
                  -moz-justify-content: center;
                  -webkit-justify-content: center;
                  -ms-justify-content: center;
                  justify-content: center;
                }
      
          }
      
          @media screen and (max-width: 980px) and (orientation: portrait) {
      
            #header {
              padding: 6em 3em 4em 3em ;
              -moz-flex-direction: column-reverse;
              -webkit-flex-direction: column-reverse;
              -ms-flex-direction: column-reverse;
              flex-direction: column-reverse;
            }
      
              #header .content {
                display: block;
                width: 100%;
                text-align: center;
                margin: 0 0 2em 0;
              }
      
              #header .image {
                overflow: hidden;
              }
      
          }
      
          @media screen and (max-width: 736px) {
      
           
              #header h1 {
                font-size: 2em;
              }
      
              #header p {
                font-size: 1em;
                line-height: inherit;
              }
      
          }
      
          @media screen and (max-width: 736px) and (orientation: landscape) {
      
            #header {
              padding: 2em 2em 0.1em 2em ;
            }
      
              #header .content {
                margin: 0 2em 2em 0;
              }
      
              #header .image {
                font-size: 0.8em;
                width: 15em;
                max-width: 20vw;
              }
      
                #header .image .inner, #header .image:before, #header .image:after {
                  font-size: 0.8em;
                }
      
          }
      
          @media screen and (max-width: 736px) and (orientation: portrait) {
      
            #header {
              padding: 3em 1.5em 1em 1.5em ;
            }
      
              #header .image {
                font-size: 0.6em;
                max-width: 60vw;
              }
      
          }
      
        @media screen and (max-width: 480px) and (orientation: landscape) {
      
          #header {
            padding: 2em 1.5em 0.1em 1.5em ;
          }
      
            #header .image {
              font-size: 0.7em;
            }
      
            #header .actions {
              font-size: 0.8em;
            }
      
        }
      
        @media screen and (max-width: 480px) and (orientation: portrait) {
      
          #header {
            padding: 2em 1em 0.1em 1em ;
          }
      
        }
      
          body.is-mobile #header {
            background-attachment: scroll, scroll;
          }
      
          body.is-preload #header .content {
            -moz-transform: translateX(2em);
            -webkit-transform: translateX(2em);
            -ms-transform: translateX(2em);
            transform: translateX(2em);
            opacity: 0;
          }
      
          body.is-preload #header .image {
            -moz-transform: translateY(4em);
            -webkit-transform: translateY(4em);
            -ms-transform: translateY(4em);
            transform: translateY(4em);
            opacity: 0;
          }
      
            body.is-preload #header .image img {
              opacity: 0;
            }
      
        @media screen and (max-width: 980px) and (orientation: portrait) {
      
          body.is-preload #header .content {
            -moz-transform: none;
            -webkit-transform: none;
            -ms-transform: none;
            transform: none;
            opacity: 1;
          }
      
          body.is-preload #header .image {
            -moz-transform: translateY(2em);
            -webkit-transform: translateY(2em);
            -ms-transform: translateY(2em);
            transform: translateY(2em);
          }
      
        }
      
      /* Main */
      
        #main {
          padding: 4em 0 2em 0 ;
        }
      
          @media screen and (max-width: 736px) {
      
            #main {
              padding: 3em 0 1em 0 ;
            }
      
          }
      
      /* Footer */
      
        #footer {
          background-color: #f7f7f7;
          color: #999999;
          padding: 4.5em 0 2.5em 0 ;
          color: #b0b0b0;
          text-align: center;
        }
      
          #footer input, #footer select, #footer textarea {
            color: #999999;
          }
      
          #footer a {
            color: inherit;
            border-bottom-color: #c6c6c6;
          }
      
            #footer a:hover {
              color: #A8D0E6;
            }
      
          #footer strong, #footer b {
            color: #828282;
          }
      
          #footer h1, #footer h2, #footer h3, #footer h4, #footer h5, #footer h6 {
            color: #828282;
          }
      
          #footer blockquote {
            border-left-color: #d6d6d6;
          }
      
          #footer code {
            background: rgba(144, 144, 144, 0.075);
            border-color: #d6d6d6;
          }
      
          #footer hr {
            border-bottom-color: #d6d6d6;
          }
      
          #footer a {
            color: inherit;
          }
      
          #footer .copyright {
            font-size: 0.8em;
          }
      
          @media screen and (max-width: 980px) {
      
            #footer {
              padding: 4em 4em 2em 4em ;
            }
      
          }
      
        @media screen and (max-width: 736px) and (orientation: landscape) {
      
          #footer {
            padding: 3em 3em 1em 3em ;
          }
      
        }
      
        @media screen and (max-width: 736px) and (orientation: portrait) {
      
          #footer {
            padding: 3em 1.5em 1em 1.5em ;
          }
      
        }

        .section>*, .section>*>*{
          transform: scale(0.8);
          transition: 0.8s ease-in-out;
        }
        .section.active>*, .section.active>*>*{
          transform: scale(1);
        }
    `}</style>
</>);
export default Styles;