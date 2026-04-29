import WeatherReport from "@/components/WeatherReport.vue"
import { flushPromises, mount, shallowMount } from "@vue/test-utils"
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

    it("should return data", async () => {
        const mockData = {
            location: {
                localtime: new Date(),
                name: 'Eindhoven',
                region: 'North Brabant',
                country: 'Netherlands',
                lat: 52.37,
                lon: 4.9
            },
            current: {
                temp_c: 10,
                temp_f: 50,
                humidity: 50,
                precip_in: 0.1,
                precip_mm: 2.5,
                condition: {
                text: 'Sunny',
                icon: 'https://via.placeholder.com/150'
                },
                wind_degree: 180,
                wind_dir: 'S',
                wind_kph: 10,
                wind_mph: 6.2
            }
        }

        global.fetch = vi.fn(() => Promise.resolve({
            json: () => Promise.resolve(mockData)
        })) as any

        const wrapper = await mount(WeatherReport, {
            props: {
                coords: {
                    latitude: 0,
                    longitude: 0
                }
            }
        })

        await flushPromises();

        expect(wrapper.text()).toContain(mockData.current.condition.text)
        expect(wrapper.text()).toContain(mockData.current.temp_c)
        expect(wrapper.text()).toContain(mockData.location.name)
        expect(wrapper.text()).toContain(mockData.location.region)
        expect(wrapper.text()).toContain(mockData.current.wind_kph)
        expect(wrapper.text()).toContain(mockData.current.wind_degree)
    })
})