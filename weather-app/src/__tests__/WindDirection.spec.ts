import { shallowMount } from "@vue/test-utils"
import WindDirection from "@/components/WindDirection.vue"

describe("WindDirection", () => {
    it("renders without crashing", ():void => {
        const wrapper = shallowMount(WindDirection, { 
            props: { degrees: 90 }
        });
        expect(wrapper).toBeTruthy()
    })

    it("renders the indicators with the correct wind direction", () => {
        const wrapper = shallowMount(WindDirection, {
            props: {
                degrees: 90
            }
        })

        const direction = wrapper.find("[data-testid=direction]")
        expect(direction.attributes("style")).toContain("rotate(90deg)")
        expect(direction.html()).toContain("⬇️")
    })
})