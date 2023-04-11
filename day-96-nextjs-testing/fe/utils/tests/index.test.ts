import { cutTextToLength } from "../index";
import { slugify, composeArticleSlug, extractArticleIdFromSlug } from "../index";

const str = "The-Quick brownfox test.";


describe("cutTextToLength", () => {
    it("should cut text to length", () => {
        expect(cutTextToLength(str, 20))
            .toBe("The-Quick brownfox t...");
    });


    it("should not cut text to length", () => {
        expect(cutTextToLength(str, 100)).toBe(str);
    });
});

const str3 = "HELLO World!"
const str2 = 12

describe("slugify", () => {
    it("should to lower case", () => {
        console.log(slugify(str3));
        expect(slugify(str3)).toBe("hello-world");

    });

})

describe("composeArticleSlug", () => {
    it('compose article', () => {
        console.log(composeArticleSlug(str2, str));

        expect(composeArticleSlug(str2, str)).toBe("thequick-brownfox-test-12")

    })
})

describe("extractArticleIdFromSlug", () => {
    it("extract Article id from slug", () => {
        console.log(extractArticleIdFromSlug(str));

        expect(extractArticleIdFromSlug(str)).toBe("Quick brownfox test.")
    })
})