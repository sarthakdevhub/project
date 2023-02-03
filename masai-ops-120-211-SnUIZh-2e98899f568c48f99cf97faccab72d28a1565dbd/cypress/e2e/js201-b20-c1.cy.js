import "cypress-localstorage-commands";
import data from "../../submissionData.json"; // do not create this file
// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];
describe("Test", function () {
  let acc_score = 1;
  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }

    it(`should be able to submit the form with product details 1`, () => {
      cy.visit(url);
      cy.saveLocalStorage();

      cy.get("#product_brand").type("Nike");
      cy.get("#product_name").type("shoe 1");
      cy.get("#product_price").type(1200);
      cy.get("#product_image").type(
        "https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png"
      );

      cy.get("#product_form").submit();

      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`should be able to submit the form with product details 2`, () => {
      cy.visit(url);
      cy.saveLocalStorage();

      cy.get("#product_brand").type("Nike");
      cy.get("#product_name").type("Shoe 2");
      cy.get("#product_price").type(1500);
      cy.get("#product_image").type(
        "https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png"
      );

      cy.get("#product_form").submit();
      //acc_score = generateScore(acc_score, score, 1);
      cy.then(() => {
        acc_score += 1;
      });
    });
    it("onclicking the show products button redirect to products page(/inventory.html)", () => {
      cy.visit(url);
      cy.get("#show_products").click();
      cy.location("pathname").should("eq", "/inventory.html");
      cy.then(() => {
        acc_score += 1;
      });
    });
    it("onclicking add more products button  redirect to index page (/index.html)", () => {
      cy.visit(url + "inventory.html");
      cy.get("#add_product").click();
      cy.location("pathname").should("eq", "/index.html");
      cy.then(() => {
        acc_score += 1;
      });
    });
    it(`check if data added to localstorage successfully`, () => {
      cy.restoreLocalStorage();

      let data = JSON.parse(localStorage.getItem("data"));

      expect(data.length).to.equal(2);

      expect(data[0].name).to.equal("shoe 1");

      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`check if data shown on inventory page correctly`, () => {
      cy.visit(url);
      cy.restoreLocalStorage();
      cy.get("#show_products").click();
      cy.get("#products_data").children().should("have.length", 2);
      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`check remove functionality is working `, () => {
      cy.restoreLocalStorage();

      cy.get("#products_data div > button").then((y) => {
        y[0].click();

        expect(JSON.parse(localStorage.getItem("data")).length).to.equal(1);
      });

      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`generate score`, () => {
      //////////////
      let result = {
        id,
        marks: acc_score,
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
