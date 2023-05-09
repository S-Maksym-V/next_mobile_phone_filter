export type MPhoneTile = {
	phone_id: number;
	model: string;
	brand: string;
	operating_system: string;
	resolution_x: number;
	resolution_y: number;
	price_INR: number;
};

export type PhoneData = {
	'3G': string | null;
	'4G_LTE': string | null;
	battery_capacity_mAh: number | null;
	bluetooth: string | null;
	brand: string | null;
	front_camera: number | null;
	gps: string | null;
	internal_storage_GB: number | null;
	model: string | null;
	name: string | null;
	number_of_SIMs: number | null;
	operating_system: string | null;
	phone_id: number;
	price_EUR: number | null;
	price_INR: number | null;
	processor: number | null;
	ram_MB: number | null;
	rear_camera: number | null;
	resolution_x: number | null;
	resolution_y: number | null;
	screen_size_inches: number | null;
	touchscreen: string | null;
	'wi-fi': string | null;
};
