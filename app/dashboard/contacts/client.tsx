"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableHead, TableRow, TableHeader, TableCell, TableBody } from "@/components/ui/table";
import { createContactAction, updateContactAction, deleteContactAction } from "./actions";

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  notes: string;
}

export default function ContactsClient({ contacts }: { contacts: Contact[] }) {
  const [openContact, setOpenContact] = useState<Contact | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [creating, setCreating] = useState(false);
  const [editFormData, setEditFormData] = useState<Partial<Contact>>({});
  const [list, setList] = useState<Contact[]>(contacts || []);
  const [pending, setPending] = useState(false);

  // Handle create
  async function handleCreateContact(form: FormData) {
    setPending(true);
    const res = await createContactAction(form);
    if (res.success) {
      // Simple refetch trick (in real-case, revalidate from server)
      setList([...list, {
        id: "temp-" + Math.random(), // Not ideal, but demo for now
        firstName: String(form.get("firstName")),
        lastName: String(form.get("lastName")),
        email: String(form.get("email")),
        phone: String(form.get("phone") || ""),
        company: String(form.get("company") || ""),
        notes: String(form.get("notes") || "")
      }]);
      setShowDialog(false);
    }
    setPending(false);
  }

  // Handle edit
  async function handleEditContact(form: FormData) {
    setPending(true);
    const res = await updateContactAction(form);
    if (res.success && openContact) {
      setList(list.map((c) =>
        c.id === openContact.id
          ? { ...c,
              firstName: String(form.get("firstName")),
              lastName: String(form.get("lastName")),
              email: String(form.get("email")),
              phone: String(form.get("phone") || ""),
              company: String(form.get("company") || ""),
              notes: String(form.get("notes") || "")
            }
          : c
      ));
      setOpenContact(null);
    }
    setPending(false);
  }

  // Handle delete
  async function handleDeleteContact(id: string) {
    setPending(true);
    const fd = new FormData();
    fd.append("id", id);
    const res = await deleteContactAction(fd);
    if (res.success) {
      setList(list.filter((c) => c.id !== id));
    }
    setPending(false);
  }

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h2 className="font-semibold text-xl">Contacts</h2>
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogTrigger asChild>
            <Button variant="primary" onClick={() => setCreating(true)}>
              Add Contact
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Contact</DialogTitle>
            </DialogHeader>
            <form
              action={async (formData) => {
                await handleCreateContact(formData);
              }}
              className="space-y-2"
            >
              <Input name="firstName" placeholder="First name" required />
              <Input name="lastName" placeholder="Last name" required />
              <Input name="email" placeholder="Email" type="email" required />
              <Input name="phone" placeholder="Phone" />
              <Input name="company" placeholder="Company" />
              <Input name="notes" placeholder="Notes" />
              <DialogFooter>
                <Button type="submit" disabled={pending}>
                  {pending ? "Saving..." : "Save"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Notes</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {list.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell>{contact.firstName}</TableCell>
              <TableCell>{contact.lastName}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>{contact.company}</TableCell>
              <TableCell>{contact.notes}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Dialog open={openContact?.id === contact.id} onOpenChange={(v) => v ? setOpenContact(contact) : setOpenContact(null)}>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="ghost" onClick={() => setEditFormData(contact)}>
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Contact</DialogTitle>
                      </DialogHeader>
                      <form
                        action={async (formData) => {
                          formData.append("id", contact.id);
                          await handleEditContact(formData);
                        }}
                        className="space-y-2"
                      >
                        <Input name="firstName" defaultValue={contact.firstName} required />
                        <Input name="lastName" defaultValue={contact.lastName} required />
                        <Input name="email" defaultValue={contact.email} required />
                        <Input name="phone" defaultValue={contact.phone} />
                        <Input name="company" defaultValue={contact.company} />
                        <Input name="notes" defaultValue={contact.notes} />
                        <DialogFooter>
                          <Button type="submit" disabled={pending}>
                            {pending ? "Updating..." : "Update"}
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                  <Button size="sm" variant="destructive" onClick={() => handleDeleteContact(contact.id)} disabled={pending}>
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}