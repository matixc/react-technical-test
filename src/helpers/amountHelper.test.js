import { prepareAvailableAmount } from "./amountHelper";

it("renders without crashing", () => {
    expect(prepareAvailableAmount(1234.56, "GBP", "en-GB")).toEquals(
        "£1,234.54"
    );
});
