/*
  Warnings:

  - A unique constraint covering the columns `[name,userId]` on the table `cards` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,label]` on the table `credentials` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,title]` on the table `safetyNotes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "cards_name_userId_key" ON "cards"("name", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "credentials_userId_label_key" ON "credentials"("userId", "label");

-- CreateIndex
CREATE UNIQUE INDEX "safetyNotes_userId_title_key" ON "safetyNotes"("userId", "title");
