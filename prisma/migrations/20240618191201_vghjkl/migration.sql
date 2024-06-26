-- DropIndex
DROP INDEX "USER_EMAIL_key";

-- DropIndex
DROP INDEX "USER_PHONE_key";

-- CreateTable
CREATE TABLE "POLICIES_ROLES" (
    "Id" SERIAL NOT NULL,
    "UUID" TEXT NOT NULL,
    "MANDT" TEXT NOT NULL,
    "POLICY" TEXT NOT NULL,
    "ROLE" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "delrow" BOOLEAN NOT NULL DEFAULT false,
    "policiesId" INTEGER,
    "rolesId" INTEGER,

    CONSTRAINT "POLICIES_ROLES_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "ROLE_RIGHTS" (
    "Id" SERIAL NOT NULL,
    "UUID" TEXT NOT NULL,
    "MANDT" TEXT NOT NULL,
    "ROLE" TEXT NOT NULL,
    "RIGHT" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "delrow" BOOLEAN NOT NULL DEFAULT false,
    "rolesId" INTEGER,
    "rightsId" INTEGER,

    CONSTRAINT "ROLE_RIGHTS_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "POLICIES_ROLES_UUID_key" ON "POLICIES_ROLES"("UUID");

-- CreateIndex
CREATE UNIQUE INDEX "POLICIES_ROLES_MANDT_POLICY_ROLE_key" ON "POLICIES_ROLES"("MANDT", "POLICY", "ROLE");

-- CreateIndex
CREATE UNIQUE INDEX "ROLE_RIGHTS_UUID_key" ON "ROLE_RIGHTS"("UUID");

-- CreateIndex
CREATE UNIQUE INDEX "ROLE_RIGHTS_MANDT_ROLE_RIGHT_key" ON "ROLE_RIGHTS"("MANDT", "ROLE", "RIGHT");

-- AddForeignKey
ALTER TABLE "POLICIES_ROLES" ADD CONSTRAINT "POLICIES_ROLES_policiesId_fkey" FOREIGN KEY ("policiesId") REFERENCES "POLICIES"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "POLICIES_ROLES" ADD CONSTRAINT "POLICIES_ROLES_rolesId_fkey" FOREIGN KEY ("rolesId") REFERENCES "ROLES"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ROLE_RIGHTS" ADD CONSTRAINT "ROLE_RIGHTS_rolesId_fkey" FOREIGN KEY ("rolesId") REFERENCES "ROLES"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ROLE_RIGHTS" ADD CONSTRAINT "ROLE_RIGHTS_rightsId_fkey" FOREIGN KEY ("rightsId") REFERENCES "RIGHTS"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
