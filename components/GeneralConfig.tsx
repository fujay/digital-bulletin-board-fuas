"use client";

import { onGeneralSaveAction } from "@/app/actions/actions";
import Form from "./UI/ConfigForm";
import { IoIosSave } from "react-icons/io";
import IconButton from "./UI/IconButton";
import { useNotificationContext } from "@/store/notification-context";
import Input from "./UI/FormInput";
import { HiOutlineClock } from "react-icons/hi2";

type GeneralConfigProps = {
  time: number;
  db: "None" | "Local" | "Remote";
  images: "Local" | "Remote";
  stale: number;
};

export default function GeneralConfig({
  time,
  db,
  images,
  stale,
}: GeneralConfigProps) {
  const { showNotification, notification } = useNotificationContext();
  // const [error, action, isPending] = useActionState(saveConfig, null);
  return (
    <>
      <Form onSaveAction={onGeneralSaveAction}>
        <datalist id="defaultSeconds">
          <option value="10"></option>
          <option value="60"></option>
          <option value="120"></option>
          <option value="180"></option>
          <option value="240"></option>
          <option value="300"></option>
        </datalist>
        <datalist id="defaultMinutes">
          <option value="1"></option>
          <option value="60"></option>
          <option value="120"></option>
          <option value="180"></option>
          <option value="240"></option>
          <option value="300"></option>
          <option value="360"></option>
          <option value="420"></option>
          <option value="480"></option>
          <option value="540"></option>
          <option value="600"></option>
          <option value="660"></option>
          <option value="720"></option>
          <option value="1440"></option>
        </datalist>
        <Input
          defaultValue={time}
          label="Seconds interval for bulletin (1-300):"
          id="time"
          icon={HiOutlineClock}
          type="number"
          min={1}
          max={300}
          list="defaultSeconds"
          placeholder="Seconds interval"
          title="Seconds interval for bulletin (1-300) changes the time between each bulletin"
          aria-label="Seconds interval for bulletin (1-300)"
          tooltip="Seconds interval for bulletin (1-300) changes the time between each bulletin"
          required
        />
        <div>
          <label htmlFor="db">Database:</label>
          <div>
            <select
              defaultValue={db}
              id="db"
              name="db"
              className="rounded mt-3 border border-fuas-secondary text-fuas-primary focus:border-fuas-primary focus:outline-none"
            >
              <option>None</option>
              <option>Local</option>
              <option disabled>Remote</option>
            </select>
          </div>
        </div>
        <fieldset className="border-2 p-2 border-fuas-secondary">
          <legend>Select preferred method for storing images:</legend>
          <div className="flex justify-around">
            <Input
              defaultValue="Local"
              defaultChecked={images === "Local" ? true : false}
              className="min-w-min"
              label="Local"
              type="radio"
              id="local"
              name="images"
              // value="email"
            />

            <Input
              defaultValue="Remote"
              defaultChecked={images === "Remote" ? true : false}
              className="min-w-min"
              label="Remote"
              type="radio"
              id="remote"
              name="images"
              // value="phone"
            />
          </div>
        </fieldset>
        <Input
          defaultValue={stale}
          label="Minutes for Stale times (1-1440):"
          id="stale"
          icon={HiOutlineClock}
          type="number"
          min={1}
          max={1440}
          list="defaultMinutes"
          placeholder="Minutes interval"
          title="Time in minutes for cache to be considered stale"
          aria-label="Minutes for Stale times (1-360)"
          tooltip="Time in minutes for cache to be considered stale"
          required
        />
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
