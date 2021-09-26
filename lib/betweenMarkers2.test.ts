import { expect } from "chai";
import { betweenMarkers } from "./betweenMarkers2";

const testData = [
  {
    text: "What is >apple<",
    begin: ">",
    end: "<",
    result: "apple",
  },
  {
    text: "<head><title>My new site</title></head>",
    begin: "<title>",
    end: "</title>",
    result: "My new site",
  },
  {
    text: "No[/b] hi",
    begin: "[b]",
    end: "[/b]",
    result: "No",
  },
  {
    text: "No [b]hi",
    begin: "[b]",
    end: "[/b]",
    result: "hi",
  },
  {
    text: "No hi",
    begin: "[b]",
    end: "[/b]",
    result: "No hi",
  },
  {
    text: "No <hi>",
    begin: ">",
    end: "<",
    result: "",
  },
];

describe('betweenMarkers("What is >apple<", ">", "<"), "apple"', function () {
  testData.forEach((t) => {
    it(`${t.text}`, function () {
      const b = betweenMarkers(t.text, t.begin, t.end);
      expect(b).to.equal(t.result);
      [
        {
          text: "What is >apple<",
          begin: ">",
          end: "<",
          result: "apple",
        },
        {
          text: "<head><title>My new site</title></head>",
          begin: "<title>",
          end: "</title>",
          result: "My new site",
        },
        {
          text: "No[/b] hi",
          begin: "[b]",
          end: "[/b]",
          result: "No",
        },
        {
          text: "No [b]hi",
          begin: "[b]",
          end: "[/b]",
          result: "hi",
        },
        {
          text: "No hi",
          begin: "[b]",
          end: "[/b]",
          result: "No hi",
        },
        {
          text: "No <hi>",
          begin: ">",
          end: "<",
          result: "",
        },
      ];
    });
  });
});
