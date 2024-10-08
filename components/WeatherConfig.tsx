"use client";

import { useNotificationContext } from "@/store/notification-context";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosSave } from "react-icons/io";
import Notification from "./UI/Notification";
import { useActionState } from "react";
import IconButton from "./UI/IconButton";
import Input from "./UI/FormInput";
import Form from "./UI/ConfigForm";
import { onWeatherSaveAction } from "@/app/actions/actions";
import { useFormStatus } from "react-dom";

type WeatherConfigProps = {
  location: string;
  qrcode?: string;
  graphic: "Classic" | "Animated";
};

export default function WeatherConfig({
  location,
  qrcode,
  graphic,
}: WeatherConfigProps) {
  const { showNotification, notification } = useNotificationContext();
  // const [error, action, isPending] = useActionState(saveConfig, null);

  return (
    <>
      <Form onSaveAction={onWeatherSaveAction}>
        <Input
          // value={location}
          defaultValue={location}
          label="Search location via city name or coordinates"
          id="location"
          icon={FaMapLocationDot}
          type="text"
          placeholder="Search location"
          title="City or Coordinates as 'lat, lon' like 50.11552, 8.68417 or Frankfurt am Main"
          aria-label="Search location via city name or coordinates"
          tooltip="City or Coordinates as 'lat, lon' like 50.11552, 8.68417 or Frankfurt am Main"
          required
        />
        <Input
          defaultChecked={qrcode === "on"}
          label="QR Code"
          id="qrcode"
          type="checkbox"
          className="min-w-min"
          title="Activate to show QR code for the weather"
          aria-label="Activate to show QR code for the weather"
        />
        <div>
          <label htmlFor="graphic">Weather graphics</label>
          <div>
            <select
              // value={graphic}
              defaultValue={graphic}
              id="graphic"
              name="graphic"
              className="rounded mt-3 border border-fuas-secondary text-fuas-primary focus:border-fuas-primary focus:outline-none"
            >
              <option>Classic</option>
              <option>Animated</option>
            </select>
          </div>
        </div>
        <IconButton
          type="submit"
          icon={() => <IoIosSave />}
          onClick={() =>
            showNotification({
              title: "Location saved",
              message: "Weather location has been saved",
              status: "success",
            })
          }
        >
          Save
        </IconButton>
      </Form>
      {/* {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )} */}
    </>
  );
}
