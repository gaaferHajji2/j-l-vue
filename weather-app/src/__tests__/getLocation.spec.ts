import GetLocation from "@/components/GetLocation.vue"
import { shallowMount } from "@vue/test-utils"
import { vi } from 'vitest'

describe("GetLocation", () => {
    // Here we need to change the test execution, because we retrieve async data.
    it("should render without crashing", async (): Promise<void> => {
        global.navigator.geolocation = {
            getCurrentPosition: () => {},
        }
        const wrapper = await shallowMount(GetLocation)
        expect(wrapper).toBeTruthy()
    })

    it("should return valid body with mocking", async (): Promise<void> => {
        const mockGeoLocation = vi.fn((successCallback: Function) => {
            const position = {
                coords: {
                    latitude: 51.5074,
                    longitude: -0.1278,
                },
            };
            successCallback(position)
        })

        global.navigator.geolocation = {
            getCurrentPosition: mockGeoLocation,
        }

        const wrapper = shallowMount<GetLocation>(GetLocation)
        expect(wrapper.vm.coords).toEqual({
            latitude: 51.5074,
            longitude: -0.1278,
        })
    })

    it("should display error message", async (): Promise<void> => {
        const mockGeoLocation = vi.fn((successCallback: Function, errorCallback: Function) => {
            const error = new Error("User denied access to geolocation")
            errorCallback(error)
        })

        global.navigator.geolocation = {
            getCurrentPosition: mockGeoLocation,
        }

        const warpper = await shallowMount<GetLocation>(GetLocation)
        expect(warpper.vm.geolocationBlockedByUser).toEqual(true)
        expect(warpper.html()).toContain("User denied access")
    })
})