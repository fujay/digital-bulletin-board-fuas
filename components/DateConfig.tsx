"use client";

import { onDateSaveAction } from "@/app/actions/actions";
import { useNotificationContext } from "@/store/notification-context";
import { IoIosSave } from "react-icons/io";
import Form from "./UI/ConfigForm";
import IconButton from "./UI/IconButton";

type DateConfigProps = {
  clock: "Clock" | "Date" | "Clock and Date" | "Clock and Date without time";
};

export default function DateConfig({ clock }: DateConfigProps) {
  const { showNotification, notification } = useNotificationContext();
  return (
    <>
      <Form onSaveAction={onDateSaveAction}>
        <div>
          <label htmlFor="clock">Clock display</label>
          <div>
            <select
              defaultValue={clock}
              id="clock"
              name="clock"
              required
              className="rounded mt-3 border border-fuas-secondary text-fuas-primary focus:border-fuas-primary focus:outline-none"
            >
              <option>Clock</option>
              <option>Date</option>
              <option>Clock and Date</option>
              <option>Clock and Date without time</option>
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
