import { shallowMount } from "@vue/test-utils"
import WindDirection from "@/components/WindDirection.vue"

describe("WindDirection", () => {
    it("renders without crashing", ():void => {
        const wrapper = shallowMount(WindDirection, { 
            props: { degrees: 90 }
        });
        expect(wrapper).toBeTruthy()
    })
})