export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      MobilePhones: {
        Row: {
          "3G": string | null
          "4G_LTE": string | null
          battery_capacity_mAh: number | null
          bluetooth: string | null
          brand: string | null
          front_camera: number | null
          gps: string | null
          internal_storage_GB: number | null
          model: string | null
          name: string | null
          number_of_SIMs: number | null
          operating_system: string | null
          phone_id: number
          price_EUR: number | null
          price_INR: number | null
          processor: number | null
          ram_MB: number | null
          rear_camera: number | null
          resolution_x: number | null
          resolution_y: number | null
          screen_size_inches: number | null
          touchscreen: string | null
          "wi-fi": string | null
        }
        Insert: {
          "3G"?: string | null
          "4G_LTE"?: string | null
          battery_capacity_mAh?: number | null
          bluetooth?: string | null
          brand?: string | null
          front_camera?: number | null
          gps?: string | null
          internal_storage_GB?: number | null
          model?: string | null
          name?: string | null
          number_of_SIMs?: number | null
          operating_system?: string | null
          phone_id: number
          price_EUR?: number | null
          price_INR?: number | null
          processor?: number | null
          ram_MB?: number | null
          rear_camera?: number | null
          resolution_x?: number | null
          resolution_y?: number | null
          screen_size_inches?: number | null
          touchscreen?: string | null
          "wi-fi"?: string | null
        }
        Update: {
          "3G"?: string | null
          "4G_LTE"?: string | null
          battery_capacity_mAh?: number | null
          bluetooth?: string | null
          brand?: string | null
          front_camera?: number | null
          gps?: string | null
          internal_storage_GB?: number | null
          model?: string | null
          name?: string | null
          number_of_SIMs?: number | null
          operating_system?: string | null
          phone_id?: number
          price_EUR?: number | null
          price_INR?: number | null
          processor?: number | null
          ram_MB?: number | null
          rear_camera?: number | null
          resolution_x?: number | null
          resolution_y?: number | null
          screen_size_inches?: number | null
          touchscreen?: string | null
          "wi-fi"?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
