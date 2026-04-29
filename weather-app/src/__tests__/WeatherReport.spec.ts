import WeatherReport from "@/components/WeatherReport.vue"
import { shallowMount } from "@vue/test-utils"
import { vi } from "vitest"


describe("Weather Report Tests", () => {
    it("should render successfully", async (): Promise<void> => {
        global.fetch = vi.fn() as any
        const wrapper = shallowMount(WeatherReport, {
            props: {
                coords: {
                    latitude: 0,
                    longitude: 0
                }
            }
        })
        expect(wrapper).toBeTruthy()
    })
    it("displays loading message with undefined data", async (): Promise<void> => {
        global.fetch = vi.fn(() => Promise.resolve({
            json: () => Promise.resolve()
        })) as any
        const wrapper = shallowMount(WeatherReport, {
            props: {
                coords: {
                    latitude: 0,
                    longitude: 0
                }
            }
        })
        expect(wrapper.html()).toContain("Loading...")
    })
})