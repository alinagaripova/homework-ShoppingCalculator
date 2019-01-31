import {amount} from "../src/js/lib";

test ('should calculate sum', () => {
    const items = [100, 200, 300];
    const result = amount.sum(items);

    expect(result).toBe(600);

});