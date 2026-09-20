# Self-Service Digital Printing Kiosk System

## Project Overview
An ATM-style, self-service digital printing kiosk system enabling users to walk up, scan a QR code on a kiosk, upload documents via their mobile web browser, configure print parameters, pay digitally, and receive physical prints within seconds without requiring a mobile application installation.

## Problem Being Solved
Traditional printing shops suffer from slow counter queues, friction in file transfer (email/USB), manual pricing errors, and cash management overhead. This system automates the complete loop from upload to output.

## How the System Works
1. Customer scans the kiosk's dynamic QR code.
2. Opens a lightweight Mobile Web App session tied to that specific kiosk/printer.
3. Uploads documents (PDF/Images) to [OBJECT_STORAGE].
4. Chooses print configurations (B&W/Color, Simplex/Duplex, Copies).
5. Calculates the dynamic quote and completes payment via [PAYMENT_GATEWAY].
6. Backend creates a print job and pushes it to the target Raspberry Pi controller via [QUEUE_SYSTEM].
7. Raspberry Pi fetches the file, sends it to the physical printer, and reports progress.
8. Temporary documents are automatically purged from storage post-completion.

## Main Users
* **Customers:** End-users printing documents quickly.
* **Shop Owners / Managers:** Overseeing revenue, pricing, and hardware health.
* **Support Staff:** Handling paper jams, refunds, and device troubleshooting.
* **Super Admins:** Global system configuration and tenant management.

## Repository/File Structure
See `engineering/PROJECT_STRUCTURE.md` for the full repository layout.

## MVP Scope vs Future Scope
* **MVP:** QR-based web flow, single document upload, basic pricing, simulated/test payments, Raspberry Pi print execution, basic admin dashboard.
* **Future:** Multi-page advanced splitting, user accounts, cloud printing fleet management, loyalty programs, and loyalty discounts.

---

# Recommended Starting Point (First 10 Tasks)

Before serious development begins, the team must complete these 10 concrete tasks:

1. **Agree on the customer journey:** Walk through the mobile web flow wireframes and validate step count.
2. **Define MVP scope:** Freeze the feature list to prevent scope creep (see `product/MVP_SCOPE.md`).
3. **Finalize system architecture:** Review and sign off on `architecture/SYSTEM_DESIGN.md` and diagrams.
4. **Design the database:** Validate entities, foreign keys, and indexes in `database/DATABASE_DESIGN.md`.
5. **Define print-job states:** Review all edge-case states in `security/FAILURE_HANDLING.md`.
6. **Define API boundaries:** Finalize request/response payloads in `backend/API_DESIGN.md`.
7. **Select the payment approach:** Choose the test-mode configuration for [PAYMENT_GATEWAY].
8. **Select the Raspberry Pi communication approach:** Choose between HTTP Polling, WebSockets, or MQTT for the prototype (see `hardware/RASPBERRY_PI_DESIGN.md`).
9. **Design the initial UI:** Review mobile screens and the admin dashboard spec.
10. **Divide work among team members:** Assign workstreams using `team/TEAM_TASK_BREAKDOWN.md`.
